import express from "express";
import recipesRoutes from "./recipesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "RPG Recipes"})
    })

    app.use(
        express.json(),
        recipesRoutes
    )
}

export default routes;