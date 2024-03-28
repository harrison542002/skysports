import prisma_instance from "../utils/db.js";
import { paginationHelper } from "../utils/pagination.helper.js";

/**
 *
 * @param {integer} limit : size of current page
 * @param {integer} page : number of page
 * @returns
 */
export const getAllLeagues = (limit, page, where) => {
  const pagination = paginationHelper(limit, page);
  return prisma_instance.league.findMany({
    include: {
      standing: {
        take: 5,
      },
    },
    where,
    ...pagination,
  });
};

export const getSingleLeague = (queries) => {
  return prisma_instance.league.findFirst({
    where: {
      ...queries,
    },
  });
};

export const getTotalLeagues = (where) => {
  return prisma_instance.league.count({
    where,
  });
};
