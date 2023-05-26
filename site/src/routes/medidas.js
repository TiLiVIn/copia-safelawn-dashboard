var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idEstadio/setores", function (req, res) {
    medidaController.buscarUltimasMedidasSetores(req, res);
});

router.get("/ultimas/:idEstadio/setor1", function (req, res) {
    medidaController.buscarUltimasMedidas1(req, res);
});

router.get("/ultimas/:idEstadio/setor2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/ultimas/:idEstadio/setor3", function (req, res) {
    medidaController.buscarUltimasMedidas3(req, res);
});
router.get("/ultimas/:idEstadio/setor4", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

router.get("/tempo-real/:idEstadio/setores", function (req, res) {
    medidaController.buscarMedidasEmTempoRealSetores(req, res);
})

router.get("/tempo-real/:idEstadio/setor1", function (req, res) {
    medidaController.buscarMedidasEmTempoReal1(req, res);
})

router.get("/tempo-real/:idEstadio/setor2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})
router.get("/tempo-real/:idEstadio/setor3", function (req, res) {
    medidaController.buscarMedidasEmTempoReal3(req, res);
})
router.get("/tempo-real/:idEstadio/setor4", function (req, res) {
    medidaController.buscarMedidasEmTempoReal4(req, res);
})

module.exports = router;