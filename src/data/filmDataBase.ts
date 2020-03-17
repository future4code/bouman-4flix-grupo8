import { BaseDB } from './baseDataBase';
import { Film } from '../business/entities/film';

export class FilmDB extends BaseDB {
   private filmTableName = "films";

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
}