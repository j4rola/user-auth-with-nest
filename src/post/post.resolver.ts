import { Resolver, Mutation, Query, Args, Context,} from '@nestjs/graphql';
import Ctx from 'src/types/context.type'; 
import { PostInput, Post } from '../graphql'
import { PostService } from './post.service';
import { GetPostInput } from '../graphql';


@Resolver()
export class PostResolver {     

    constructor( private postService: PostService ){}  
    
    @Mutation('createPost')
    async createPost(@Args('input') input: PostInput, @Context() context: Ctx): Promise<Post> {  
        let user = context.req.user 
        let post = this.postService.createPost(input, context) 
        return post as any 
    }

    @Query('getPosts')
    async getPosts(@Args('input') input: GetPostInput) {
        return this.postService.getPosts(input)
    }
   
}
