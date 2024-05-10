import { t } from "elysia";
const validasiBerita = {
  body: t.Object({
    nama: t.String({
      error: "nama tidak bole h kossong",
    }),
  }),
};
export default validasiBerita;
