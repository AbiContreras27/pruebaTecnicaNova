import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"


@Entity({
    name: "USERS"
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    fullname: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    email: string;

    @Column()
    age: number;

    @Column({ type: 'bigint' })
    phone: number;

    @Column({ type: "varchar", length: 50, nullable: true })
    country?: string | null;

    @Column({ type: "varchar", length: 50, nullable: true })
    city?: string | null;
}
