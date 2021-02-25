import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveys1614272584066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let type = process.env.NODE_ENV === 'test' ? "uuid" : "integer";
        await queryRunner.createTable(
            new Table({
                name: "surveys",
                columns: [
                    {
                        name: "id",
                        type: type,
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
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
        await queryRunner.dropTable("surveys");
    }

}
