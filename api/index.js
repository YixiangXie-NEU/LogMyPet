import express from "express";
import db from "../db/index.js";

const router = express.Router();

router.post("/api/pets", db.getPets);
router.get("/api/pet/:id", db.getOnePet);
router.post("/api/pet", db.createPet);
router.put("/api/pet/:id", db.editPet);
router.delete("/api/pet/:id", db.deletePet);

router.post("/api/createRecord", db.createRecord);
router.get("/api/record/:id", db.getOneRecord);
router.post("/api/records", db.getRecords);
router.put("/api/record/:id", db.editRecord);
router.delete("/api/record/:id", db.deleteRecord);

router.post("/api/signup", db.createUser);
router.post("/api/login", db.authenticate);
router.get("/api/logout", db.userLogOut);
router.get("/api/authStatus", db.userAuthStatus);
router.get("/api/currUser", db.getUser);

router.get("/api/categories", db.getCategories);
router.get("/api/seed", db.seedDB);

export default router;

//Super well organized!
