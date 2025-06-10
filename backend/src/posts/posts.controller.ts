 
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Post(':id/like')
  like(@Param('id') id: string, @Body() body: { walletAddress: string }) {
    return this.postsService.like(+id, body.walletAddress);
  }

  @Post(':id/comment')
  comment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.postsService.comment(+id, createCommentDto);
  }
}