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

@Module({
  imports: [

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],   
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'), 
        outputAs: 'class',
 
    }}),

    SequelizeModule.forRoot({

      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [UserEntity],

    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService, UserResolver],
})
export class AppModule {}
