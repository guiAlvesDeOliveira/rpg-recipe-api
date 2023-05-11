import recipes from "../models/Recipe.js";

class RecipesController {
    static listRecipes = (req, res) => {
        recipes.find()
            .exec()
            .then(recipes => {
                res.status(200).json(recipes)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    };

    static addRecipe = async (req, res) => {
        let recipe = new recipes(req.body);

        try {
            await recipe.save();
            res.status(201).json(recipe);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    static updateRecipe = async (req, res) => {
        const id = req.params.id;

        try {
            await recipes.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).json(recipes);
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    static deleteRecipe = async (req, res) => {
        const id = req.params.id;

        try{
            await recipes.findByIdAndDelete(id);
            res.status(200).json(`Recipe with ${id} deleted`);
        }catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}

export default RecipesController
