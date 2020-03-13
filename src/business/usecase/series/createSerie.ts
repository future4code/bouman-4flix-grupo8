import { v4 } from "uuid";
import { Serie } from "../../entities/serie";
import { SerieDB } from "../../../data/serieDataBase";

export class CreateSerieUC {
    constructor(private db: SerieDB) { }

    public async execute(input: CreateSerieUCInput): Promise<CreateSerieUCoutput> {
        const id = v4();

        const serie = new Serie(
            id,
            input.title,
            input.date,
            input.picture,
            input.synopsis
        );

        await this.db.createSerie(serie)

        return{
            message: "Serie created successfully"
        }
    }
}


export interface CreateSerieUCInput {
    title: string,
    date: Date,
    picture: string,
    synopsis: string

}

export interface CreateSerieUCoutput {
    message: string;
}