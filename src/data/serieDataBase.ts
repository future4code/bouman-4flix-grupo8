import { BaseDB } from "./baseDataBase";
import { Serie } from "../business/entities/serie";

export class SerieDB extends BaseDB {
   private seriesTable = "series";

   private mapDbSerieToSerie(input?: any): Serie | undefined {
      return (
         input && new Serie(
            input.id,
            input.title,
            input.date,
            input.picture,
            input.synopsis
         )
      )
   }

   public async createSerie(serie: Serie): Promise<void> {
      await this.connection.raw(
         `
         INSERT INTO ${
         this.seriesTable
         } (id, title, date,picture, synopsis )
         VALUES (
            '${serie.getId()}',
            '${serie.getTitle()}',
            '${serie.getDate()}',
            '${serie.getPicture()}',
            '${serie.getSynopsis()}'
         )
      `);
   }

   public async getSeriesById(id: string): Promise<Serie | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.seriesTable} WHERE id = '${id}'
      `);

      return this.mapDbSerieToSerie(result[0][0])
   }
}