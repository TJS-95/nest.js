import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly UsersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.UsersService.findUser(username, password);
    if (user && user.password) {
      // const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    // const payload = { username: user.username, sub: user.userId };
    const payload = await this.validateUser(user.username, user.password);
    if (!payload) {
      return {
        code: 200,
        msg: '账号或密码错误',
      };
    }
    return {
      code: 200,
      msg: '登录成功',
      success: 'ok',
      access_token: this.jwtService.sign(payload),
    };
  }
}
