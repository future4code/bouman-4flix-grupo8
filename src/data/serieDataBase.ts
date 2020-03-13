import { BaseDB } from "./baseDataBase";
import { Serie } from "../business/entities/serie";

export class SerieDB extends BaseDB {
   private seriesTable = "series";

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
}