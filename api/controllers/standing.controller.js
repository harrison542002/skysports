import * as StandingService from "../services/standing.service.js";
import logger from "../utils/logger.js";

export const findStandingByLeague = async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const { league_id } = req.params;
    const standings = await StandingService.findStandings(limit, page, {
      league_id: +league_id,
    });
    const count = await StandingService.getTotalStandings({
      league_id: +league_id,
    });
    return res.status(200).json({ data: standings, count, page });
  } catch (error) {
    logger.error(error);
    return res.status(500);
  }
};
