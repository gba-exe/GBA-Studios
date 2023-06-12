var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/dashboardController");

router.get("/qtdLogin/", function (req, res) {
    medidaController.qtdLogin(req, res);
});

router.get("/login/", function (req, res) {
    medidaController.login(req, res);
});

router.get("/qtdUsuarios/", function (req, res) {
    medidaController.qtdUsuarios(req, res);
});

router.get("/qtdEnderecos/", function (req, res) {
    medidaController.qtdEnderecos(req, res);
});

router.get("/usrPresencial/", function (req, res) {
    medidaController.usrPresencial(req, res);
});

router.get("/nivConhecimento/", function (req, res) {
    medidaController.nivConhecimento(req, res);
});

module.exports = router;