import packageJson from '../../package.json';
import development from '../config/development.json';
import production from '../config/production.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'http://apitestelocal.nwsys.com.br/macpro',
  production: 'https://apitestelocal.nwsys.com.br/macpro'
};

const get_data_setting = (env: string) => {
  const config_path = env === 'production' ? production : development;
  return config_path;
};

const get_current_config = () => {
  const env = process.env.NODE_ENV || 'development';
  return get_data_setting(env);
};

const NODE_ENV = process.env.NODE_ENV;

export { uri, version, get_current_config, NODE_ENV };
