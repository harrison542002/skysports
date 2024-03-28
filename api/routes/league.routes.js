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
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ListLeagueResponse'
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
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/League'
 *          example:
 *            league_id: 1,
 *            league_name: Premier League
 *            league_logo: ""
 *            season: 2023/2024,
 *            slug: premier-league-table
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
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ListStandingResponse'
 */
leagueRouter.get("/:league_id/standings", findStandingByLeague);

export default leagueRouter;
