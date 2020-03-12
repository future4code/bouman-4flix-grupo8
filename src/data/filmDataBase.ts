import { BaseDB } from './baseDataBase';
import { Film } from '../business/entities/film';

export class FilmDB extends BaseDB {
   private filmTableName = "films";

   // private mapDateToDbDate(input: Date): string {
   //    const year = input.getFullYear();
   //    const month = input.getMonth() + 1;
   //    const date = input.getDate();
   //    return `${year + "-" + month + "-" + date}`;
   // }

   // private mapDbDateToDate(input: string): Date {
   //    return new Date(input);
   // }

   // private mapDbFilmToFilm(input?: any): Film | undefined {
   //    return (
   //       input &&
   //       new Film(
   //          input.id,
   //          input.title,
   //          this.mapDbDateToDate(input.date),
   //          input.link,
   //          input.synopsis,
   //          input.length,
   //          input.picture
   //       )
   //    );
   // }

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
}