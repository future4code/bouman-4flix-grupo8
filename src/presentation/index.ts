import express, { Request, Response } from "express";
import { createFilmEndpoint } from "./endpoints/films/createFilm";
import { createSerieEndpoint } from "./endpoints/series/createSeries";
import { createEpisodeEndpoint } from "./endpoints/episodes/createEpisode";

const app = express();

app.use(express.json());

app.post("/createFilm", createFilmEndpoint);

app.post("/createSerie", createSerieEndpoint);

app.post("/createEpisode", createEpisodeEndpoint);

export default app;
