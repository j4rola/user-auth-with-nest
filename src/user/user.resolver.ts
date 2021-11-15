import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput, User } from '../graphql'; 


@Resolver('User')
export class UserResolver {

    constructor( private userService: UserService){}

    @Query()
    async getUsers() { 
        return this.userService.findAll()
    }

    @Mutation('addUser')
    async addUser(@Args('input') args: CreateUserInput): Promise<User> {
        const createdUser = await this.userService.create(args)
        return createdUser as any 
        
    }


}






