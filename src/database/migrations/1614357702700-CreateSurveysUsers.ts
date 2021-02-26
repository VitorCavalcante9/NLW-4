import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveysUsers1614357702700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let type = process.env.NODE_ENV === 'test' ? "uuid" : "varchar";
        await queryRunner.createTable(
            new Table({
                name: "surveys_users",
                columns:[
                    {
                        name: "id",
                        type: type,
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: type
                    },
                    {
                        name: "survey_id",
                        type: type
                    },
                    {
                        name: "value",
                        type: "float",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_user",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "fk_survey",
                        referencedTableName: "surveys",
                        referencedColumnNames: ["id"],
                        columnNames: ["survey_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys_users");
    }

}
