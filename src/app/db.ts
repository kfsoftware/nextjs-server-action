import 'reflect-metadata';
import { DataSource, Entity, Column, CreateDateColumn, Index, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Counter {
    @PrimaryColumn()
    id: string;
    @Column()
    value: number;
    @CreateDateColumn()
    createdAt: number;
    @UpdateDateColumn()
    updatedAt: number;
}
@Entity()
@Index(["label"], {
    unique: true,
},)
export class Issuer {
    @PrimaryColumn()
    id: string;
    @Column()
    label: string;
    @Column()
    tenantId: string;
    @Column()
    issuerDid: string;

    @Column()
    issuerKid: string;

    @Column()
    ebsiIssuerDid: string;

    @Column()
    ebsiIssuerKid: string;

    @CreateDateColumn()
    createdAt: number;

    @UpdateDateColumn()
    updatedAt: number;

}


export const postgres = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    logging: false,
    entities: [
        Issuer,
        Counter
    ],
    migrations: ['./migration/*.{js,ts}'],
    subscribers: [],
})
const initializePromise = postgres.initialize()
export async function getDataSource() {
    return await initializePromise
}
