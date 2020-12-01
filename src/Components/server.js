import { Server } from "miragejs";
import serverData from "./serverData.json";
export function serverAPI() {
  let server = new Server({
    routes() {
      this.namespace = "api";
      this.get("/books", () => {
        return serverData;
      });
    },
  });

  return server;
}
