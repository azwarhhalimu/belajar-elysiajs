import { Elysia, t } from "elysia";
import routingAdmin from "./routingAdmin";
import routingMain from "./Admin/routingMain";

const app = new Elysia()

  .get("/", () => "azwar")
  .group("/admin", (app) => routingAdmin(app))
  .use(routingMain)
  .listen(2000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
