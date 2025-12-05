import { Client as PostgresClient } from "pg";
import config from "../config/index.js";

const { database: databaseConfig } = config

function getDBClient() {
	const db = databaseConfig.db

	if (db == "PG") {
		return PostgresClient
	}

	return null
}

function getDBAuthConfig() {
	const db = databaseConfig.db
	const dbAuthConfig = databaseConfig.auth[db]
	return dbAuthConfig
}

const dbServices = {
	init: async () => {
		console.log("Connecting to DB...")
		const dbClient = getDBClient()
		if (!dbClient) {
			console.log("Failed to connect")
			return false
		}
		
		const dbAuthConfig = getDBAuthConfig();
		if (!dbAuthConfig) {
			console.log("Invalid auth config")
			return false
		}

		const clientInstance = new dbClient(dbAuthConfig);
		await clientInstance.connect()
		return clientInstance

	},
	connectDB: () => {
		console.log("DB CONNECTION")
	}
}

export default dbServices
