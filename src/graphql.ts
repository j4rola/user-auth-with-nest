
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

export class ConfirmUserInput {
    email: string;
    password: string;
}

export class PostInput {
    postKey?: Nullable<string>;
    post: string;
    userKey?: Nullable<string>;
}

export class GetPostInput {
    userKey: string;
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
    postKey?: Nullable<string>;
    post: string;
    hasUser?: Nullable<User>;
    userKey?: Nullable<string>;
}

export abstract class IMutation {
    abstract createPost(input?: Nullable<PostInput>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract logout(): Nullable<User> | Promise<Nullable<User>>;

    abstract addUser(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract confirmUser(input?: Nullable<ConfirmUserInput>): User | Promise<User>;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getPosts(input?: Nullable<GetPostInput>): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract me(): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
