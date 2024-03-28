import * as LeagueService from "../services/league.service.js";
import logger from "../utils/logger.js";

export const findAllLeague = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const leagues = await LeagueService.getAllLeagues(limit, page);
    const count = await LeagueService.getTotalLeagues();
    return res.status(200).json({ data: leagues, count });
  } catch (error) {
    logger.error(error);
    return res.status(500);
  }
};

export const findSingleLeague = async (req, res) => {
  try {
    const { slug } = req.params;
    const league = await LeagueService.getSingleLeague({ slug });
    if (!league) {
      return res.status(404).json(null);
    } else {
      return res.status(200).json(league);
    }
  } catch (error) {
    logger.error(error);
    return res.status(500);
  }
};
