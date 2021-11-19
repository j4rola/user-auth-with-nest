const bcrypt = require('bcrypt'); 

import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common'; 
import {  User } from '../graphql';  
import { UserEntity} from './user.model'; 
import { ConfirmUserInput } from '../graphql'; 
import { omit } from 'lodash'



@Injectable()
export class UserService { 

    constructor(
        @InjectModel(UserEntity)
        private userModel: typeof UserEntity,
    ) {} 

    private readonly allUsers = []  
    

    async create (args: User): Promise<UserEntity> {

        
        let userData: Partial <UserEntity> = {firstName: args.firstName, lastName: args.lastName, password: args.password, email: args.email}

        let hash = bcrypt.hashSync(args.password, 10);

        userData.password = hash
        
        let user = await UserEntity.create(userData as any) 

        this.allUsers.push(user) 

        
        
        return user 
    }     

    async confirmUser({email, password}: ConfirmUserInput): Promise <ConfirmUserInput> { 


        const user = await this.userModel.findOne({where: {email: email, password: password}})

        user.active = true 
        
        user.save() 

        return user  
        //throw new Error ('Username and password combination does not exist')
    

    }

    
    findAll(): User[] {
        return null//return this.userModel.findAll({where: { }})
    }

    

}













