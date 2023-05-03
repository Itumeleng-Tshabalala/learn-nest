import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../schemas/user.schema';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UpperFirstPipe } from 'src/shared/pipes/upper-first.pipe';

@Controller('users')
export class UserController {

    /**
     * 
     * @param usersService 
     */
    constructor(private readonly usersService: UserService, private eventEmitter: EventEmitter2) { }

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
    async getUsers(@Query('limit', ParseIntPipe) limit: number, @Query('offset', ParseIntPipe) offset: number): Promise<User[]> {
        try {
            return this.usersService.getUsers(limit, offset);
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
    async createUser(@Body(UpperFirstPipe) user: User): Promise<User> {
        try {
            console.debug("user after piped", user);
            const createdUser: User = await this.usersService.createUser(user)
            this.eventEmitter.emit("user.created", createdUser);
            return createdUser;
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
