import express from "express";
import db from "../db/index.js";

const router = express.Router();

router.get("/api/pets", db.getPets);
router.get("/api/pet/:id", db.getOnePet);
router.post("/api/pet", db.createPet);
router.put("/api/pet/:id", db.editPet);
router.delete("/api/pet/:id", db.deletePet);
router.post("/api/createRecord", db.createRecord);
router.get("/api/categories", db.getCategories);
router.get("/api/getCurrUser", db.userAuthStatus);
router.post("/api/signup", db.createUser);
router.post("/api/login", db.authenticate);

export default router;
