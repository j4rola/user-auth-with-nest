import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript'; 
import * as sequelize from 'sequelize'
import * as bcrypt from 'bcrypt'
import { User } from 'src/graphql';
import { nextTick } from 'process';


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
  posts: string; 

  @Column
  active: boolean; 

  comparePassword: (candidatePassword: string) => boolean 
 
  
}



