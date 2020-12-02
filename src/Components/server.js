import { Request, Server } from "miragejs";
import serverData from "./serverData.json";
export function serverAPI() {
  let server = new Server({
    routes() {
      this.namespace = "api";
      this.get("/books", () => {
        return serverData;
      });
      this.post("/add", (schema, req) => {
        serverData.push(JSON.parse(req.requestBody));
        return serverData;
      });
    },
  });

  return server;
}
