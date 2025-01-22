import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';
import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { Navigation } from './src/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import useGoogleFonts from './src/hooks/useGoogleFonts';

// Initialize Firebase
const firebaseConfig = {
  apiKey: '0',
  authDomain: 'mealstogo-92344.firebaseapp.com',
  projectId: 'mealstogo-92344',
  storageBucket: 'mealstogo-92344.appspot.com',
  messagingSenderId: '482795193523',
  appId: '',
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export default function App() {
  const fontsLoaded = useGoogleFonts();

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    );
  }

  return null;
}
