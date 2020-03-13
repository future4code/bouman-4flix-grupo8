import { FilmDB } from "../../../data/filmDataBase";
import { NotFoundError } from "../../error/NotFoundError";

export class GetSerieByIdUC {
   constructor(private db: FilmDB) { }

   public async execute(input: GetSerieByIdUCInput): Promise<GetSerieByIdUCOutput> {
      const serie = await this.db.getSeriesById(input.id)

      if (!serie) {
         throw new NotFoundError("Serie not found");
      }

      return {
         id: serie.getId(),
         title: serie.getTitle(),
         date: serie.getDate(),
         picture: serie.getPicture(),
         synopsis: serie.getSynopsis()
      }
   }
}

export interface GetSerieByIdUCInput {
   id: string;
}

export interface GetSerieByIdUCOutput {
   id: string,
   title: string;
   date: Date;
   picture: string;
   synopsis: string;
}
