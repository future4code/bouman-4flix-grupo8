import express, { Request, Response } from "express";
import { createFilmEndpoint } from "./endpoints/films/createFilm";

import { createSerieEndpoint } from "./endpoints/series/createSeries";
import { createEpisodeEndpoint } from "./endpoints/episodes/createEpisode";

import { getFilmByIdEndpoint } from "./endpoints/films/getFilmById";
import { getSerieByIdEndpoint } from "./endpoints/films/getSerieById";


const app = express();

app.use(express.json());

app.post("/createFilm", createFilmEndpoint);
app.get("/movie/:id", getFilmByIdEndpoint);
app.get("/serie/:id", getSerieByIdEndpoint);

app.post("/createSerie", createSerieEndpoint);

app.post("/createEpisode", createEpisodeEndpoint);

export default app;
