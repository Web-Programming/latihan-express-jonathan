const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

// Fungsi dan rute index kita gunakan untuk memanggil semua data dalam database MongoDB
router.get("/mahasiswa", mahasiswaController.Index);
router.post("/insert",mahasiswaController.insert);
router.patch("/update/:id",mahasiswaController.update);
router.get("/show/:id",mahasiswaController.show);
router.delete("/delete/:id",mahasiswaController.destroy);
module.exports = router;
