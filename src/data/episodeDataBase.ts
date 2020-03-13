import { BaseDB } from "./baseDataBase";
import { Episodes } from "../business/entities/episodes";

export class EpisodeDB extends BaseDB {
    private episodeTable = "episodes";

    public async createEpisode(episode: Episodes): Promise<void> {
        await this.connection.raw(
            `
            INSERT INTO ${
            this.episodeTable
            } (id,title,length,link,synopsis,serie_id)
            VALUE (
                '${episode.getId()}',
                '${episode.getTitle()}',
                '${episode.getLength()}',
                '${episode.getLink()}',
                '${episode.getSynopsis()}',
                '${episode.getSerieId()}'
            )
        `);
    }
}