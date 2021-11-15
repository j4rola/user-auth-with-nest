import { Injectable } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'; 
import { Module } from '@nestjs/common';
import { User } from '../graphql'
import { UserEntity } from './user.model' 


@Injectable()
export class UserService {

    async create (args: User): Promise<UserEntity> {
        let userData: Partial <UserEntity> = {firstName: args.firstName, lastName: args.lastName}
        let user = await UserEntity.create(userData as any)
        return user
    }     
    
    findAll(): User[] {
        return null
    }

}











