import "reflect-metadata";
import { DataSource } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

//Configuração do banco de dados com TypeORM
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mesha",
    database: "mesha-postgres",
    entities: ["./src/modules/**/infra/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
})

//Inicializa o banco
AppDataSource.initialize().then(async () => {
    //Seed para a criação de um usuário admin
    await AppDataSource.createQueryBuilder()
                        .insert()
                        .into("users")
                        .values([
                            {
                                id: uuidV4() ,
                                name : "admin",
                                email: "admin@admin.com",
                                cpf:"000.000.000-00",
                                phone: "(00) 00000-0000",
                                created_at: new Date(), 
                                is_valid: true,
                                is_admin: true,
                                knowledges: ["admin", "react"]
                            }
                        ])
                        .execute();
    console.log("Initializing the database...")
}).catch((err)=> console.log(err))

