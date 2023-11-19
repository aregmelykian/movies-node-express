const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  const { movieId } = request.params;
  let data = {};
  if (movieId) {
    data = await service.listByMovie(movieId)
  } else {
    data = await service.list();
  }
  response.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
