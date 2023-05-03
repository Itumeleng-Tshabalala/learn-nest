import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UserController {

    /**
     * 
     * @param usersService 
     */
    constructor(private readonly usersService: UserService) { }

    /**
     * 
     * @param email 
     * @returns 
     */
    @Get(':email')
    async getUser(@Param('email') email: string): Promise<User> {
        try {
            return this.usersService.getUserByEmail(email);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * 
     * @returns
     */
    @Get()
    async getUsers(): Promise<User[]> {
        try {
            return this.usersService.getUsers();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * 
     * @param user 
     * @returns 
     */
    @Post()
    async createUser(@Body() user: User): Promise<User> {
        try {
            return this.usersService.createUser(user)
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * 
     * @param email 
     * @param user 
     * @returns 
     */
    @Patch(':email')
    async updateUser(@Param('email') email: string, @Body() user: User): Promise<User> {
        try {
            return this.usersService.updateUser(email, user);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * 
     * @param email 
     * @param user 
     * @returns 
     */
    @Patch(':email')
    async deleteUser(@Param('email') email: string): Promise<boolean> {
        try {
            return this.usersService.deleteUser(email);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}