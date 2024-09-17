'use client';

import { useEffect, useState } from 'react';

import { localStorageKey } from 'enum';
import { HeaderComponent } from 'template/components';
import { BodyComponent } from 'template/components';
import { FooterComponent } from 'template/components';

import { HomeProps } from './types';

export const Home = ({ showcase }: HomeProps) => {
  const settings = {
    isMiniBanner: true,
    isBreadcrumb: false,
    breadcrumbs: [{ name: 'Inicio', url: '/' }, { name: 'Login' }]
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          localStorage.setItem(
            localStorageKey.user_geolocation,
            JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
          );
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Localização não suportada pelo navegador.');
    }
  }, []);

  return (
    <>
      <HeaderComponent settings={settings} />
      <BodyComponent showcase={showcase} />
      <FooterComponent />
    </>
  );
};
