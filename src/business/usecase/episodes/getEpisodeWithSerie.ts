import { EpisodeDB } from "../../../data/episodeDataBase";
import { NotFoundError } from "../../error/NotFoundError";

export class GetEpisodeWithSerieUC {
   constructor(private db: EpisodeDB) { }

   public async execute(input: GetEpisodeWithSerieUCInput): Promise<GetEpisodeWithSerieUCOutput> {
      const episode = await this.db.getEpisodeById(input.id)

      if (!episode) {
         throw new NotFoundError("Episode not found")
      }

      return {
         id: episode.getId(),
         title: episode.getTitle(),
         length: episode.getLength(),
         link: episode.getLink(),
         synopsis: episode.getSynopsis(),
         serie: episode.getId()
      }
   }
}

export interface GetEpisodeWithSerieUCInput {
   id: string;
}

export interface GetEpisodeWithSerieUCOutput {
   id: string,
   title: string,
   length: string,
   link: string,
   synopsis: string,
   serie: string
}