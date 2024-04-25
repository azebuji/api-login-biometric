//Arquivo responsável por dar tipos ao process.env

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      API_PORT: number;
      DB_PORT: number;
      PWD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      JWT_API_SECRET: string;
      CLIENT: string;
      API_NAME: string;
      URL_HOST: string;
      URL_FRONT: string;
      URL_FRONT_DEV: string;
      DATABASE_URL: string;
      ASSASAPIKEY: string;
      ASSAS_DOMAIN: string;
      ASSAS_SANDBOX_PASS: string;
      KEY_FOR_ASSAS: string;
      DAILY_API_KEY: string;
      DAILY_ADDRESS: string
    }
  }
}

export { }