import { Request, Response } from 'express';
import { EpisodeDB } from "../../../data/episodeDataBase";
import { CreateEpisodeUC } from "../../../business/usecase/episodes/createEpisode";

export const createEpisodeEndpoint = async (req: Request, res: Response) => {
    try {
        const createEpisodeUC = new CreateEpisodeUC(new EpisodeDB())
        const result = await createEpisodeUC.execute({
            title: req.body.title,
            length: req.body.length,
            link: req.body.link,
            synopsis: req.body.synopsis,
            serie_id: req.body.serie_id
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
};