import { BaseDB } from './baseDataBase';
import { Film } from '../business/entities/film';
import { Serie } from '../business/entities/serie';

export class FilmDB extends BaseDB {
   private filmTableName = "films";
   private serieTableName = "series";

   private mapDbFilmToFilm(input?: any): Film | undefined {
      return (
         input && new Film(
            input.id,
            input.title,
            input.date,
            input.link,
            input.synopsis,
            input.length,
            input.picture,
         )
      );
   }

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

   public async createFilm(film: Film): Promise<void> {
      await this.connection.raw(
         `
         INSERT INTO ${
         this.filmTableName
         } (id, title, date, link, synopsis, length, picture)
         VALUES (
            '${film.getId()}',
            '${film.getTitle()}',
            '${film.getDate()}',
            '${film.getLink()}',
            '${film.getSynopsis()}',
            '${film.getLength()}',
            '${film.getPicture()}'
         )
      `);
   }

   public async getFilmById(id: string): Promise<Film | undefined> {
      const result = await this.connection.raw(`
          SELECT * FROM ${this.filmTableName} WHERE id = '${id}'
       `);

      return this.mapDbFilmToFilm(result[0][0])
   };

   public async getSeriesById(id: string): Promise<Serie | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.serieTableName} WHERE id = '${id}'
      `);

      return this.mapDbSerieToSerie(result[0][0])
   }
}