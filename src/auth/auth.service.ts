import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { randomBytes, scrypt } from 'crypto';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByemail(email);
    if (user && user[0].password === password) {
      const { password, ...result } = user[0];
      return result as Omit<User, 'password'>;
    }
    return new WrongCredentialsException();
  }

  async registration(email: string, password: string, username: string) {
    return await this.usersService.create({ email, password, username });
  }

  async login(email: string, password: string) {
    return await this.validateUser(email, password);
  }
}

class WrongCredentialsException extends ForbiddenException {
  constructor() {
    super('Wrong credentials provided');
  }
}
