import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IQuery } from 'src/common/type/query';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private repoInstance: Repository<User>;

  constructor(@InjectRepository(User) repo: Repository<User>) {
    this.repoInstance = repo;
  }

  public async create(createUserDto: CreateUserDto) {
    const userEmail = await this.findByemail(createUserDto.email);
    if (userEmail.length > 0) {
      return new BadRequestException('Email already registered');
    } else {
      const newUserData = this.repoInstance.create(createUserDto);

      this.repoInstance.save(newUserData);
      return `User: ${createUserDto.username} is successfully created`;
    }
  }

  public async queryAll(query: IQuery) {
    const take = query.take || 5;
    const skip = query.skip || 5;
    const keyword = query.keyword || '';
    const order = query.order || 'ASC';

    const result = await this.repoInstance.findAndCount({
      // where: { username: Like('%' + keyword + '%') },
      order: { username: order },
      take: take,
      skip: skip,
    });
    // console.log('%' + keyword + '%');

    return result;
  }

  public async findAll() {
    const response = await this.repoInstance.find({
      take: 10,
      skip: 0,
    });
    return response;
  }

  public async findByemail(userEmail: string) {
    const result = await this.repoInstance.find({
      where: { email: userEmail.toLowerCase() }, // remember to use toLowerCase() to avoid case sensitive
    });

    return result;
  }

  public async findOne(queryUserDto: Partial<QueryUserDto>) {
    if (queryUserDto.id !== undefined) {
      // console.log(queryUserDto);

      const targetUser = await this.repoInstance.findOne({
        where: { id: queryUserDto.id },
      });
      if (targetUser) {
        // const { password, ...rest } = targetUser;

        return targetUser;
      } else {
        // return new NotFoundException('user not found!');
        return null;
      }
    }

    if (queryUserDto.username !== undefined) {
      const targetUser = await this.repoInstance.findOne({
        where: { username: queryUserDto.username.toLowerCase() },
      });
      if (targetUser) {
        return targetUser;
      } else {
        // return new NotFoundException('user not found!');
        return null;
      }
    }

    if (queryUserDto.email !== undefined) {
      const targetUser = await this.repoInstance.findOne({
        where: { email: queryUserDto.email.toLowerCase() },
      });
      if (targetUser) {
        return targetUser;
      } else {
        // return new NotFoundException('user not found!');
        return null;
      }
    }
  }

  async update(updateUserDto: UpdateUserDto) {
    const targetId = updateUserDto.id;
    const payload = updateUserDto.payload;

    const user = await this.repoInstance.findOne({
      where: { id: targetId },
    });
    // return user;
    if (user === null || undefined) {
      return new NotFoundException(
        'user not found! cannot update a non-existing user',
      );
    } else {
      const userUpdated = { ...user, ...payload };
      return await this.repoInstance.save(userUpdated);
    }
  }

  async remove(id: number) {
    const userToRemove = await this.repoInstance.findOne({ where: { id: id } });

    if (userToRemove === null || undefined) {
      return new NotFoundException(
        'user not found, cannot delete a non-existing user',
      );
    } else {
      return await this.repoInstance.remove(userToRemove);
    }
  }
}
