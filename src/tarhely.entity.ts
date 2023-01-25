import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarhely {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nev: string;

    @Column('int', { default: 500})
    meret: number;

    @Column('int', { default: 10000 })
    ar: number;
}