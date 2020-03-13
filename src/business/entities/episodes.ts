import { Serie } from "./serie";


export class Episodes {
    constructor(
        private id: string,
        private title: string,
        private length: string,
        private link: string,
        private synopsis: string,
        private serie_id: string
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

    public getLength(): string {
        return this.length;
    }

    public setLength(length: string) {
        this.length = length;
    }

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public getSynopsis(): string {
        return this.synopsis
    }

    public setSynopsis(synopsis: string): void {
        this.synopsis = synopsis;
    }

    public getSerieId(): string {
        return this.serie_id;
    }

    public setSerieId(serie_id: string): void {
        this.serie_id = serie_id;
    }
}

export class EpisodesWithSeries extends Episodes {
    constructor(
        id: string,
        title: string,
        length: string,
        link: string,
        synopsis: string,
        private serie: Serie
    ) {
        super(id, title, length, link, synopsis, serie.getId())
    }

    public setSerie(series: Serie): void {
        this.serie = series;
    }

    public getSerie(): Serie {
        return this.serie;
    }
}