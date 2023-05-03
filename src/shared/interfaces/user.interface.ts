import { User } from "src/resouces/user/schemas/user.schema";

export interface IUser {
    getUserByEmail(email: string): Promise<User>;
    getUsers(limit?: number, offset?: number): Promise<User[]>;
    createUser(user: User): Promise<User>;
    updateUser(email: string, user: User): Promise<User>;
    deleteUser(email: string): Promise<boolean>;
    handleUserCreatedEvent(user: User): void;
}