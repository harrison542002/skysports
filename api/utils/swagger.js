import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "./logger.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sky Sports API Doc",
      version: "1.0.0",
      description:
        "This is an API application for skysports made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "https://skysports-api.vercel.app/api/v1",
        description: "Production server",
      },
      {
        url: "http://localhost:8080/api/v1",
        description: "Development server",
      },
    ],
  },

  apis: ["./routes/*.js", "./schemas/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

  app.use("/docs", swaggerUi.serve);

  app.get("/docs", swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL })),
    //Docs in JSON format
    app.get("docs.json", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
  logger.info(`Docs avaliable at https://skysports-api.vercel.app/docs`);
};

export default swaggerDocs;
