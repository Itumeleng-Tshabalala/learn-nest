import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { User } from '../schemas/user.schema';
import { OnEvent } from '@nestjs/event-emitter';
import { IUser } from 'src/shared/interfaces/user.interface';
import * as imports from  "../../../shared/interfaces/index.interface";

@Injectable()
export class UserService implements IUser{

    /**
     * 
     * @param usersRepository 
     */
    constructor(private readonly usersRepository: UsersRepository) {}

    /**
     * 
     * @param email 
     * @returns 
     */
    async getUserByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({ email });
    }

    /**
     * 
     * @returns 
     */
    async getUsers(limit?: number, offset?: number): Promise<User[]> {
        return this.usersRepository.find({}, limit, offset);
    }

    /**
     * 
     * @param user 
     * @returns 
     */
    async createUser(user: User): Promise<User> {
        return this.usersRepository.create(user)
    }

    /**
     * 
     * @param email 
     * @param user 
     * @returns 
     */
    async updateUser(email: string, user: User): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ email }, user);
    }

    /**
     * 
     * @param email 
     * @returns 
     */
    async deleteUser(email: string): Promise<boolean> {
        return this.usersRepository.deleteOne({ email });
    }

    /**
     * 
     * @param user 
     */
    @OnEvent('user.created')
    handleUserCreatedEvent(user: User) {
        // handle and process "UserCreatedEvent" event
        console.debug('OnEvent.user.created', user);
    }
}
