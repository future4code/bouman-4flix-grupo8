import { FilmDB } from "../../../data/filmDataBase";
import { NotFoundError } from "../../error/NotFoundError";

export class GetFilmByIdUC {
   constructor(private db: FilmDB) { }

   public async execute(input: GetFilmByIdUCInput): Promise<GetFilmByIdUCOutput> {
      const film = await this.db.getFilmById(input.id)

      if (!film) {
         throw new NotFoundError("Film not found");
      }

      return {
         id: film.getId(),
         title: film.getTitle(),
         date: film.getDate(),
         link: film.getLink(),
         synopsis: film.getSynopsis(),
         length: film.getLength(),
         picture: film.getPicture()
      }
   }
}

export interface GetFilmByIdUCInput {
   id: string;
}

export interface GetFilmByIdUCOutput {
   id: string,
   title: string;
   date: Date;
   link: string;
   synopsis: string;
   length: string;
   picture: string;
}