const express = require("express");
const editFormController = require("../controllers/item-edit-controller");

const router = express.Router();

router.get("/home/edit-form",editFormController.formGet);

router.post("/home/edit-form",editFormController.formPost);



module.exports = router;