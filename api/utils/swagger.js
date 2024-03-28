import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import logger from "./logger.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sky Sports API Doc",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Development server",
    },
  ],
  apis: ["./routes/*.js", "./schemas/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
  //Swagger page
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL })
  );

  //Docs in JSON format
  app.get("docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  logger.info(`Docs avaliable at http://localhost:${port}/docs`);
};

export default swaggerDocs;
