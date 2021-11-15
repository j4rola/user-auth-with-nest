import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript'; 

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
  userName: string;

  @Column
  passWord: string;

  @Column
  posts: string; 

 
  
}