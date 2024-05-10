import Elysia from "elysia";
import ApiController from "../Main/ApiController";

const apiControler = ApiController;
const routingMain = new Elysia({
  prefix: "api",
})
  .get("/berita", () => apiControler.getAllBerita())
  .get("berita/:id", () => apiControler.getOnBerita());
export default routingMain;
