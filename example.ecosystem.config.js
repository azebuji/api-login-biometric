module.exports = {
    apps: [{
        name: "Api-protocolo",
        script: "./dist/src/server.js",
        exec_mode: 'cluster',
        watch: false,
        env_production: {
            NODE_ENV: "production",
            DB_CLIENT: "pg",
            DB_NAME: "",
            DB_HOST: "localhost",
            DB_USER: "postgres",
            DB_PORT:5432,
            DB_PASSWORD: "",
            JWT_API_SECRET: '',
            API_NAME: 'Api-protocolo',
            API_PORT: 9070,
            URL_FRONT: '',
            DATABASE_URL :"postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

        }
    }]

}

