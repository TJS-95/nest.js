import { Injectable } from '@nestjs/common';
import fs = require('fs');

@Injectable()
export class UsersService {
  async findUser(username: string, password: string) {
    let arr: any[] = [];
    console.log(username, password);
    const res = await fs.readFileSync('src/data/user.json', 'utf-8');
    const data = JSON.parse(res);
    arr = data.filter(
      item => item.username === username && item.password === password,
    );
    console.log(arr);
    if (arr.length > 0) {
      return arr[0];
    } else {
      return null;
    }
  }
}
