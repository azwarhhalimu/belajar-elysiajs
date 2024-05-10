import BeritaController from "./Admin/controller/BeritaController";
import { itRoutingAdmin } from "./interface/itRoutingAdmin";
import { t } from "elysia";
import validasiBerita from "./validator/validasiBerita";
const berita = BeritaController;
const routingAdmin = (app: itRoutingAdmin) => {
  return app
    .onBeforeHandle((context) => {
      console.log("proses otorisisa");
    })
    .get("/berita", () => berita.getAllBerita())
    .post("/berita", ({ body }) => berita.uploadFoto(body), validasiBerita)
    .get("/berita/:id", ({ params }) => berita.getOneBerita(params));
};
export default routingAdmin;
