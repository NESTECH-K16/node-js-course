import dotenv from 'dotenv'

dotenv.config()

const config = {
	appDatabase: process.env.DB_NAME,
	appDbUsername: process.env.DB_USERNAME,
	appDbPwd: process.env.DB_PASSWORD,
}

export default config

