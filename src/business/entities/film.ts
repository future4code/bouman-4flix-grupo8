export class Film {
   constructor(
      private id: string,
      private title: string,
      private date: Date,
      private link: string,
      private synopsis: string,
      private length: string,
      private picture: string
   ) { }

   public getId(): string {
      return this.id;
   }

   public setId(id: string): void {
      this.id = id;
   }

   public getTitle(): string {
      return this.title;
   }

   public setTitle(title: string): void {
      this.id = title;
   }

   public getDate(): Date {
      return this.date;
   }

   public setDate(date: Date): void {
      this.date = date;
   }

   public getLink(): string {
      return this.link;
   }

   public setLink(link: string): void {
      this.link = link;
   }

   public getSynopsis(): string {
      return this.synopsis;
   }

   public setSynopsis(synopsis: string): void {
      this.synopsis = synopsis;
   }

   public getLength(): string {
      return this.length;
   }

   public setLength(length: string): void {
      this.length = length;
   }

   public getPicture(): string {
      return this.picture;
   }

   public setPicture(picture: string) {
      this.picture = picture;
   }
};