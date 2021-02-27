import { request, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../models/AppError";
import { SurveyUsersRepository } from "../repositories/SurversUsersRepository";

class AnswerController {
    async execute(request: Request, response: Response){
        const {value} = request.params;
        const {s} = request.query;

        const surveysUsersRepository = getCustomRepository(SurveyUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(s)
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists");
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export {AnswerController};