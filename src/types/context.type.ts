import { Request, Response } from "express"
import { UserEntity } from "src/user/user.model" 

type Ctx = {
    req: Request & {user: Pick< UserEntity, 'email' | 'firstName' | 'posts' | 'userKey'>} 
    res: Response
} 

export default Ctx