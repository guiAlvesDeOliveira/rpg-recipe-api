import express from "express";
import RecipesController from "../controllers/recipesController.js";

const router = express.Router();

router
    .get("/recipes", RecipesController.listRecipes)
    .put("/recipes", RecipesController.addRecipe)
    .put("/recipe/:id", RecipesController.updateRecipe)
    .delete("/recipe/:id", RecipesController.deleteRecipe)

export default router;