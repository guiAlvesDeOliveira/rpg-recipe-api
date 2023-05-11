import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        name: String,
        ingredients: [String],
        savingThrow: Number,
        fail: String,
        bigFail: String,
        criticalFail: String,
        success: String,
        critical: String,
        serves: String
    }
)

const recipes = mongoose.model('recipes', recipeSchema);

export default recipes;