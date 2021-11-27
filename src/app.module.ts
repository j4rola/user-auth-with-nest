require('dotenv').config()
import { join } from 'path'
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';
import { UserEntity } from './user/user.model';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { get, set } from 'lodash'
import { decode } from './utils/jwt.utlils';
import { PostModule } from './post/post.module';
import { PostResolver } from './post/post.resolver';
import { PostService } from './post/post.service';
import { PostEntity } from './post/post.model';


@Module({
  imports: [

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],    
      definitions: { 
        path: join(process.cwd(), 'src/graphql.ts'), 
        outputAs: 'class',},
        context: ({req, res}) => {
          //Get cookie from request 
          const token = get(req, 'cookies.token')
          //Verify cookie
          const user = token ? decode(get(req, 'cookies.token')) : null 
          //Attach user object to req
          if (user) {
            set(req, 'user', user)
          }
          return {req, res}
        }
      }),

    SequelizeModule.forRoot({

      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD, 
      database: process.env.DATABASE,
      models: [UserEntity, PostEntity], 

    }),
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService, UserResolver, PostResolver, PostService],
})
export class AppModule {}
