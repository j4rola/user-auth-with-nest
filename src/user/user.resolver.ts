import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { ConfirmUserInput, CreateUserInput, User } from '../graphql'; 
import Ctx from 'src/types/context.type';


@Resolver('User')   
export class UserResolver {  

    constructor( private userService: UserService){}  

    @Query()
    async getUsers() { 
        //return this.userService.findAll()
    } 

    @Mutation('addUser')
    async addUser(@Args('input') args: CreateUserInput): Promise<User> { 
        const createdUser = await this.userService.create(args) 
        return createdUser as any 

    }

    @Mutation('confirmUser')
    async confirmUser(@Args('input') input: ConfirmUserInput, @Context() context: Ctx ) {
        return this.userService.confirmUser(input, context) 
    }

    @Mutation('logout')
    async logout(@Context() context: Ctx ) {
            return this.userService.logout(context);
    }

    @Query('me')
    async me(@Context() context: Ctx) { 
        return context.req.user
    } 

    

    

    

}






