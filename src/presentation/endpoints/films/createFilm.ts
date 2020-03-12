import { Request, Response } from 'express';
import { FilmDB } from '../../../data/filmDataBase';
import { CreateFilmUC } from '../../../business/usercase/films/createFilm';

export const createFilmEndpoint = async (req: Request, res: Response) => {
   try {
      const createFilmUC = new CreateFilmUC(new FilmDB());
      const result = await createFilmUC.execute({
         title: req.body.title,
         date: req.body.date,
         link: req.body.link,
         synopsis: req.body.synopsis,
         length: req.body.length,
         picture: req.body.picture
      });

      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};