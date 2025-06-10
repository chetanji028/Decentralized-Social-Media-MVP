 
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        content: createPostDto.content,
        walletAddress: createPostDto.walletAddress,
      },
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: { user: true, likes: true, comments: true },
      orderBy: { timestamp: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { user: true, likes: true, comments: true },
    });
  }

  async like(postId: number, walletAddress: string) {
    return this.prisma.like.create({
      data: { postId, walletAddress },
    });
  }

  async comment(postId: number, createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        postId,
        walletAddress: createCommentDto.walletAddress,
        content: createCommentDto.content,
      },
    });
  }
}