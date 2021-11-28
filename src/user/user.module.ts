import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
//import { Sequelize } from 'sequelize/types';
import { UserEntity } from './user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service'; 

@Module({
    imports: [SequelizeModule.forFeature([UserEntity])], 
    // export it to use it outside this module
    exports: [SequelizeModule], 
    providers: [UserResolver, UserService] 
})
export class UserModule {}  