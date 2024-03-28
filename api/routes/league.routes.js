import express from "express";
import * as LeagueController from "../controllers/league.controller.js";
import { findStandingByLeague } from "../controllers/standing.controller.js";
const leagueRouter = express.Router();

/**
 * @openapi
 * '/league':
 *  get:
 *    tags:
 *    - League
 *    summary: get list of leagues
 *    responses:
 *     200:
 *      description : Get a list of leagues
 */
leagueRouter.get("/", LeagueController.findAllLeague);

/**
 * @openapi
 * '/league/{slug}':
 *  get:
 *    tags:
 *    - League
 *    summary: get single league with slug
 *    parameters:
 *      - name: slug
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *     200:
 *      description : League Detail
 */
leagueRouter.get("/:slug", LeagueController.findSingleLeague);

/**
 * @openapi
 * '/league/{league_id}/standings':
 *  get:
 *    tags:
 *    - Standing
 *    summary: get list of standings
 *    parameters:
 *      - name: league_id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *     200:
 *      description : List of standings
 */
leagueRouter.get("/:league_id/standings", findStandingByLeague);

export default leagueRouter;
