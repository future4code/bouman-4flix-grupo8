export class Serie {
    constructor(
        private id: string,
        private title: string,
        private date: Date,
        private picture: string,
        private synopsis: string
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
        this.title = title;
    }

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date) {
        this.date = date;
    }

    public getPicture(): string {
        return this.picture;
    }

    public setPicture(picture: string): void {
        this.picture = picture;
    }

    public getSynopsis(): string {
        return this.synopsis
    }

    public setSynopsis(synopsis: string): void {
        this.synopsis = synopsis;
    }
}