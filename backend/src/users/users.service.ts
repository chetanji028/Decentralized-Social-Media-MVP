 
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createOrUpdate(createUserDto: CreateUserDto) {
    return this.prisma.user.upsert({
      where: { walletAddress: createUserDto.walletAddress },
      update: {
        username: createUserDto.username,
        bio: createUserDto.bio,
        profilePicUrl: createUserDto.profilePicUrl,
      },
      create: {
        walletAddress: createUserDto.walletAddress,
        username: createUserDto.username,
        bio: createUserDto.bio,
        profilePicUrl: createUserDto.profilePicUrl,
      },
    });
  }

  async findOne(walletAddress: string) {
    return this.prisma.user.findUnique({
      where: { walletAddress },
    });
  }
}