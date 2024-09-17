import fs from 'fs';
import path from 'path';

interface Config {
  apiUrl: string;
  apiKey: string;
  appName: string;
  apiTimeout: number;
}

interface Configs {
  development: Config;
  production: Config;
}

const env = process.env.NODE_ENV || 'development';
const configPath = path.resolve(process.cwd(), 'config.json');
const configData = fs.readFileSync(configPath, 'utf-8');
const configs: Configs = JSON.parse(configData);

const config = configs[env as keyof Configs];

export default config;
