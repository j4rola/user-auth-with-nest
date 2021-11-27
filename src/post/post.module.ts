import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize/types';
import { PostEntity } from './post.model';
import { PostResolver } from './post.resolver';
import { PostService } from 'src/post/post.service'; 
import { UserService } from 'src/user/user.service';
import { User } from 'src/graphql';
import { UserEntity } from 'src/user/user.model';

@Module({
    imports: [SequelizeModule.forFeature([PostEntity, UserEntity])], 
    // export it to use it outside this module
    exports: [SequelizeModule], 
    providers: [PostResolver, PostService, UserService ] 
})


export class PostModule {}  
