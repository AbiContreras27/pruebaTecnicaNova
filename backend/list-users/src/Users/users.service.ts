import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../Users/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from '../Users/dto/userDTO';



@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async create(createUserDto: Partial<User>) {
    const newUser = this.userRepository.create(createUserDto)

    return await this.userRepository.save(newUser)
  }

  async GetUsers(page: number, limit: number) {
    const [pageUsers] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    })

    const PublicUser = pageUsers.map(
      ({ ...extractUsers }) => extractUsers,
    );

    return PublicUser;

  }

  async getUserById(id: string) {
    const userFoundbyId = await this.userRepository.findOneBy({ id })

    if (!userFoundbyId) {
      throw new NotFoundException(`Usuario con ID: ${id} no encontrado`)
    }

    return userFoundbyId
  }

  async update(id: string, updateUserDto: UpdateUserDTO) {

    await this.userRepository.update(id, updateUserDto)
    return { message: 'Usuario Modificado' }

  }

  async deleleUser(id: string) {
    await this.userRepository.delete(id)
    return { messege: 'Usuario eliminado' }
  }

}
