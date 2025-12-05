import dotenv from "dotenv"
import express from "express"

import services from "./services/index.js"

const app = express()
dotenv.config()

(() => {
	services.init()
})()


export default app;
