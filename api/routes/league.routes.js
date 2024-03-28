import express from "express";
import * as LeagueController from "../controllers/league.controller.js";
import { findStandingByLeague } from "../controllers/standing.controller.js";
const leagueRouter = express.Router();

leagueRouter.get("/", LeagueController.findAllLeague);
leagueRouter.get("/:slug", LeagueController.findSingleLeague);
leagueRouter.get("/:league_id/standings", findStandingByLeague);

export default leagueRouter;
