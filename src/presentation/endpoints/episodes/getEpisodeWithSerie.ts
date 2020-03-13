import { Request, Response } from "express";
import { EpisodeDB } from "../../../data/episodeDataBase";
import { GetEpisodeWithSerieUC } from "../../../business/usecase/episodes/getEpisodeWithSerie";

export const getEpisodeWithSerieEndpoint = async (req: Request, res: Response) => {
   try {
      const getEpisodeWithSerieUC = new GetEpisodeWithSerieUC(new EpisodeDB());
      const result = await getEpisodeWithSerieUC.execute({
         id: req.params.id
      })

      res.status(200).send(result)

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message,
         ...err
      });
   }
};