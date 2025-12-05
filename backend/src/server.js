import express from "express"
import app from "./app.js"
import services from "./services/index.js"

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
	console.log("initializing services...")
	global.services = services
	await services.init()

	console.log("APP STARTED RUNNING ON PORT", PORT)
})
