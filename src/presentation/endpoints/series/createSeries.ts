import { Request, Response } from "express";
import { CreateSerieUC } from "../../../business/usecase/series/createSerie";
import { SerieDB } from "../../../data/serieDataBase";

export const createSerieEndpoint = async (req: Request, res: Response) => {
    try {
        const createSerieUC = new CreateSerieUC(new SerieDB())
        const result = await createSerieUC.execute({
            title: req.body.title,
            date: req.body.date,
            picture: req.body.picture,
            synopsis: req.body.synopsis
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};