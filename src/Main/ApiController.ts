class ApiController {
  getOnBerita() {
    return { status: "return 1 berita" };
  }
  async getAllBerita() {
    return "halama public . lihat semua berita";
  }
}

export default new ApiController();
