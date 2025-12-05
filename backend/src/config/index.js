const config = {
	database: {
		"db": "PG",
		"auth": {
			"PG": {
				user: process.env.DB_USER,
				password: process.env.DB_PASSWD,
				port: process.env.DB_PORT,
				database: process.env.DB_DBNAME,
				host: process.env.DB_HOST,
			}
		}
	}
}

export default config
