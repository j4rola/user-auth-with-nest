import { Injectable } from '@nestjs/common';
import Ctx from 'src/types/context.type'; 
import { Post } from '../graphql'
import { PostEntity } from './post.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetPostInput } from 'src/graphql';



@Injectable()
export class PostService {
    
    constructor(
        @InjectModel(PostEntity)
        private postModel: typeof PostEntity, 
        ) {} 
    
        async createPost(args: Post, context: Ctx): Promise<PostEntity> { 
    
            let userData: Partial <PostEntity> = {post: args.post, userKey: context.req.user.userKey} 
            
            /* Context allows us to access information about the currently logged in user. The arguments passed to our 'createPost' function are the Post type 
               rom our graphql schema and the user context. This allows us to create a post using the userKey from the currently logged in user, and the 
               template that we have defined for a new post in our schema. */ 
    
    
            let createdPost = await this.postModel.create(userData as any)  
        
            return createdPost 
        }

        async getPosts({userKey}): Promise<GetPostInput> { 
            
            return this.postModel.findAll({where: {userKey: userKey}}) as any 
        }
}
