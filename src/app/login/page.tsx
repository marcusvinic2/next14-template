import { Metadata } from 'next';

import { Login } from 'template/Pages/Login';

import { get_current_config } from 'constants/environment-variables';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login',
    description: 'Login | ' + get_current_config().name,
    applicationName: get_current_config().name,
    generator: get_current_config().generator,
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Login | ' + get_current_config().name,
      url: get_current_config().url + '/login',
      description: 'Login | ' + get_current_config().name,
      type: 'website',
      locale: get_current_config().locale,
      siteName: get_current_config().name
    }
  };
}

export default async function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}
