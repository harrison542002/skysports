export const paginationHelper = (limit, page) => {
  return {
    take: +limit,
    skip: (page - 1) * limit,
  };
};
