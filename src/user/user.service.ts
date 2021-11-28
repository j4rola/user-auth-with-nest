const bcrypt = require('bcrypt'); 

import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common'; 
import { User } from '../graphql';  
import { UserEntity} from './user.model'; 
import { ConfirmUserInput } from '../graphql'; 
import { omit } from 'lodash'
import Ctx from 'src/types/context.type'; 
import { signJwt }   from '../utils/jwt.utlils'; 
import { CookieOptions } from 'express'; 

const cookieOptions: CookieOptions = {
    domain: 'localhost', // <- Change to your client domain
    secure: false, // <- Should be true if !development ('true' requires https)
    sameSite: 'strict',
    httpOnly: true,
    path: '/',
};



@Injectable()
export class UserService { 

    constructor(
        @InjectModel(UserEntity)
        private userModel: typeof UserEntity,
    ) {} 

    private readonly allUsers = []  
    

    async create(args: User): Promise<UserEntity> { 

        
        let userData: Partial <UserEntity> = {firstName: args.firstName, lastName: args.lastName, password: args.password, email: args.email}

        let hash = bcrypt.hashSync(args.password, 10);   

        userData.password = hash   
        
        let user = await UserEntity.create(userData as any)   

        this.allUsers.push(user) 

        
        return user 
    }     

    async confirmUser({email, password}: ConfirmUserInput, context: Ctx): Promise <ConfirmUserInput> { 

        const safePassword = await bcrypt.hash(password, 10) 
        if ( await bcrypt.compare(password, safePassword) === true)  { 
       
        
            const user = await this.userModel.findOne({where: {email: email}})  

            user.active = true 
            
            user.save() 

            //Create jwt 
            const jwt = signJwt(omit(user.toJSON(), ['password', 'active']));

            //set JWT in cookie 
            context.res.cookie('token', jwt, cookieOptions)

            return user  

        } else {throw new Error('Invalid email or password'); }  
    

    }

    
    findAll(): User[] {
        return null//return this.userModel.findAll({where: { }})
    }

    

    
    

    async logout(context) {  
        context.res.cookie('token', '', { ...cookieOptions, maxAge: 0 });
        return null; 
    }

    

}













