import { Request, Response } from "express";
import { FilmDB } from "../../../data/filmDataBase"
import { GetSerieByIdUC } from "../../../business/usecase/series/getSerieById";

export const getSerieByIdEndpoint = async (req: Request, res: Response) => {
   try {
      const getSerieByIdUC = new GetSerieByIdUC(new FilmDB());
      const result = await getSerieByIdUC.execute({
         id: req.params.id
      });

      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message,
         ...err
      });
   }
};