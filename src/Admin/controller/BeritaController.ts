class BeritaController {
  async getAllBerita() {
    return { status: "ok" };
  }

  async getOneBerita(params: any) {
    return { status: "one berita " + params.id };
  }
  async uploadFoto(body: any) {
    console.log(body);
    const file = body.foto;
    if (!file) {
      return { status: "file tidak ada" };
    } else {
      const nama_file = "azwar.jpg";
      try {
        await Bun.write(`./upload/${nama_file}`, file);
      } catch (error) {
        console.log(error);
      }
    }
    return { status: "foto berhasil di upload" };
  }
}
export default new BeritaController();
