
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class User {
    userKey?: Nullable<string>;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hasPost?: Nullable<Nullable<Post>[]>;
}

export class Post {
    id: string;
    title: string;
    body: string;
    hasUser: User;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getPosts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;
}

export abstract class IMutation {
    abstract addUser(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract createPost(id: string, title: string, body: string): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
