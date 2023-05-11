import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guialves:UtDieoUmZ4MmvXJJi*4n@rpg.lchffud.mongodb.net/RPG");

let db = mongoose.connection;

export default db;