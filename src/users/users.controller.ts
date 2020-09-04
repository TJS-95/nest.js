import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiTags('用户')
export class UsersController {
  // @Get()
  // @ApiOperation({ summary: '用户列表' })
  // list() {
  //   return [];
  // }

  @Post()
  @ApiOperation({ summary: '新增用户' })
  @UseGuards(AuthGuard('jwt'))
  add() {
    return [];
  }

  @Get(':id')
  @ApiOperation({ summary: '用户信息' })
  userInfo(@Param('id') id: string) {
    return {
      id,
    };
  }
}
