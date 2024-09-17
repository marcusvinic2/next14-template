import fs from 'fs';
import path from 'path';

const devConfigPath = path.resolve(__dirname, '../config/development.json');
const prodConfigPath = path.resolve(__dirname, '../config/production.json');

const getConfig = (env: string) => {
  const configPath = env === 'production' ? prodConfigPath : devConfigPath;
  const configData = fs.readFileSync(configPath, 'utf-8');
  return JSON.parse(configData);
};

const getCurrentConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return getConfig(env);
};

const updateConfig = (env: string, newConfig: object) => {
  const configPath = env === 'production' ? prodConfigPath : devConfigPath;
  fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2), 'utf-8');
};

export { getCurrentConfig, updateConfig };
