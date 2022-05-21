import "reflect-metadata";
import { DataSource } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
//docker-compose exec app node --require ts-node/register ./node_modules/typeorm/cli.js migration:run -d src/database
//yarn typeorm migration:create src/database/migrations/CreateCategories

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

AppDataSource.initialize().then(async () => {
    // await AppDataSource.createQueryBuilder()
    //                     .insert()
    //                     .into("users")
    //                     .values([
    //                         {
    //                             id: uuidV4() ,
    //                             name : "admin",
    //                             email: "admin@admin.com",
    //                             cpf:"000.000.000-00",
    //                             phone: "(00) 00000-0000",
    //                             created_at: new Date(), 
    //                             is_valid: true,
    //                             is_admin: true,
    //                             knowledges: ["admin", "react"]
    //                         }
    //                     ])
    //                     .execute();
    console.log("Initializing the database...")
}).catch((err)=> console.log(err))

