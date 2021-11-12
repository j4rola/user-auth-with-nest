require('dotenv').config()
import { join } from 'path'
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [

    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],   
      definitions: {
        path: join(process.cwd(), 'src/user/graphql.ts'),
    }}),

    SequelizeModule.forRoot({

      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [User],

    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
