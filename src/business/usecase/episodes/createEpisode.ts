import { v4 } from "uuid";
import { Episodes } from "../../entities/episodes";
import { EpisodeDB } from "../../../data/episodeDataBase";

export class CreateEpisodeUC {
    constructor(private db: EpisodeDB) { }

    public async execute(input: CreateEpisodeUCInput): Promise<CreateEpisodeUCOutput> {
        const id = v4();

        const episode = new Episodes(
            id,
            input.title,
            input.length,
            input.link,
            input.synopsis,
            input.serie_id
        );

        await this.db.createEpisode(episode)

        return {
            message: "Episode created successfully"
        }
    };
};

export interface CreateEpisodeUCInput {
    title: string,
    length: string,
    link: string,
    synopsis: string
    serie_id: string
}

export interface CreateEpisodeUCOutput {
    message: string;
}