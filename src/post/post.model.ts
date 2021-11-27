import { AutoIncrement, Column, Model, PrimaryKey, Table, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript'; 
import { User } from 'src/graphql';
import { UserEntity } from 'src/user/user.model'; 


@Table({tableName:'Post'})
export class PostEntity extends Model<PostEntity> {

  @PrimaryKey       
  @AutoIncrement  
  @Column         
  postKey: number; 

  @Column
  userKey: number; 
  
  @BelongsTo(()=> UserEntity, 'userKey')
  user: UserEntity

  @Column           
  post: string;     


}

