import prisma_instance from "../utils/db.js";
import { paginationHelper } from "../utils/pagination.helper.js";

export const findStandings = (limit, page, where) => {
  const pagination = paginationHelper(limit, page);
  return prisma_instance.standing.findMany({
    where,
    ...pagination,
  });
};

export const getTotalStandings = (where) => {
  return prisma_instance.standing.count({
    where,
  });
};
