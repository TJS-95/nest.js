import { ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiPropertyOptional({ title: '用户名', example: 'wanyi@163.com' })
  username: string;
  @ApiPropertyOptional({ title: '密码' })
  password: string;
}
