import { FilmDB } from "../../../data/filmDataBase";
import { Film } from "../../entities/film";
import { v4 } from "uuid";

export class CreateFilmUC {
   constructor(private db: FilmDB) { }

   public async execute(input: CreateFilmUCInput): Promise<CreateFilmUCOutput> {
      const id = v4();
      const film = new Film(
         id,
         input.title,
         input.date,
         input.link,
         input.synopsis,
         input.length,
         input.picture
      )

      await this.db.createFilm(film);

      return {
         message: "Movie created sucessfully"
      };
   }
};

export interface CreateFilmUCInput {
   title: string;
   date: Date;
   link: string;
   synopsis: string;
   length: string;
   picture: string;
};

export interface CreateFilmUCOutput {
   message: string;
};