import { Resolver, Mutation, Args, Context,} from '@nestjs/graphql';
import Ctx from 'src/types/context.type'; 
import { PostInput, Post } from '../graphql'
import { PostEntity } from './post.model';
import { PostService } from './post.service';


@Resolver()
export class PostResolver {     

    constructor( private postService: PostService ){}  
    
    @Mutation('createPost')
    async createPost(@Args('input') input: PostInput, @Context() context: Ctx): Promise<Post> {  
        let user = context.req.user 
        let post = this.postService.createPost(input, context) 
        //post.userKey = user.userKey 
        return post as any 
    }
   
}
