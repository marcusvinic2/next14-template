import { Metadata } from 'next';

import { Home } from 'template/Pages/Home';

import { get_current_config } from 'constants/environment-variables';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: get_current_config().site_name,
    description: get_current_config().description,
    applicationName: get_current_config().generator,
    generator: get_current_config().generator,
    robots: { index: true, follow: true },
    openGraph: {
      title: get_current_config().site_name,
      url: get_current_config().url,
      description: get_current_config().description,
      type: 'website',
      locale: get_current_config().locale,
      siteName: get_current_config().site_name
    }
  };
}

export default async function Page() {

  return (
    <Home />
  );
}
