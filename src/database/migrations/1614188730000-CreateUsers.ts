import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614188730000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let type = process.env.NODE_ENV === 'test' ? "uuid" : "varchar";
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: type,
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
