import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import morganMiddleware from "./middlewares/morgan.middleware.js";
import swaggerDocs from "./utils/swagger.js";
import logger from "./utils/logger.js";
import leagueRouter from "./routes/league.routes.js";

dotenv.config();

const APP_V1 = "/api/v1";
const app = express();

app.use(express.static("public"));
app.use(morganMiddleware);
app.use(cors());
app.use(express.json());

swaggerDocs(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(`${APP_V1}/league`, leagueRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
