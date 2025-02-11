import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as dataUsers from '../assets/users-seed.json';


@Injectable()

export class UsersSeederService implements OnModuleInit {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async onModuleInit() {
        await this.seedUsers()
    }

    async seedUsers() {
        const userCount = await this.userRepository.count();
        if (userCount > 0) {
            console.log('Ya existen los usuarios en la base de datos')
            return
        }

        const users: User[] = []
        for (const element of dataUsers.users) {

            const user = this.userRepository.create({
                fullname: element.fullname,
                email: element.email,
                age: element.age,
                phone: element.phone,
                country: element.country,
                city: element.city
            });
            users.push(user)
        }

        await this.userRepository.save(users);

        console.log('Usuarios precargados exitosamente.')
    }
}