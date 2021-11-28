import { Injectable } from '@nestjs/common';
import Ctx from 'src/types/context.type'; 
//import { PostInput } from 'src/graphql';
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
    
    
            let createdPost = await this.postModel.create(userData as any)  
    
            //createdPost.userKey = context.req.header.arguments.userKey
    
            return createdPost 
        }

        async getPosts({userKey}): Promise<GetPostInput> { 
            
            return this.postModel.findAll({where: {userKey: userKey}}) as any 
        }
}
