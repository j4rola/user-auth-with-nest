import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript'
import cookieParser = require("cookie-parser") 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  await app.listen(3000);

  //let sequelize = app.get(Sequelize)
  //await sequelize.sync({force: true}) 
} 
bootstrap();
