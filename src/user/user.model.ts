import { AutoIncrement, Column, Model, PrimaryKey, Table, HasMany, ForeignKey } from 'sequelize-typescript'; 
import * as sequelize from 'sequelize'
import * as bcrypt from 'bcrypt'
import { User } from '../graphql';
import { nextTick } from 'process';
import { PostEntity } from 'src/post/post.model'


@Table({tableName:'User'})
export class UserEntity extends Model<UserEntity> { 

  @PrimaryKey      
  @AutoIncrement 
  @Column
  userKey: number;   

  @Column
  firstName: string; 

  @Column
  lastName: string; 

  @Column
  email: string; 

  @Column
  password: string;  

  @Column
  active: boolean; 

  @HasMany( ()=> PostEntity, 'userKey') 
  posts: PostEntity[]
  foreignKey: 'userKey'

  @ForeignKey(() => PostEntity)
  postKey: number

  comparePassword: (candidatePassword: string) => boolean 
 
  
} 





