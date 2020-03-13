import { BaseDB } from "./baseDataBase";
import { Episodes, EpisodesWithSerie } from "../business/entities/episodes";

export class EpisodeDB extends BaseDB {
    private episodeTable = "episodes";

    private mapDbEpisodeToEpisode(input?: any): Episodes | undefined {           
        return (
            input && new Episodes(
                input.id,
                input.title,
                input.length,
                input.link,
                input.synopsis,
                input.serie_id
            )
        )
    }

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

    public async getEpisodeById(id: string): Promise<Episodes | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.episodeTable} WHERE id = '${id}'
        `)

        return this.mapDbEpisodeToEpisode(result[0][0])
    }
}