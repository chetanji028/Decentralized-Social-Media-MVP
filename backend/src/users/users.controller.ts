 
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createOrUpdate(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createOrUpdate(createUserDto);
  }

  @Get(':wallet')
  findOne(@Param('wallet') wallet: string) {
    return this.usersService.findOne(wallet);
  }
}