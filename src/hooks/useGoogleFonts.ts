//import liraries
import React from 'react';
import {
    useFonts as useOswald,
    Oswald_400Regular,
    Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import {
    useFonts as useLato,
    Lato_400Regular,
    Lato_700Bold,
} from '@expo-google-fonts/lato';

const useGoogleFonts = () => {
    const [isOswaldLoaded] = useOswald({
        Oswald_400Regular,
        Oswald_700Bold,
    });

    const [isLatoLoaded] = useLato({
        Lato_400Regular,
        Lato_700Bold,
    });

    return isOswaldLoaded && isLatoLoaded;
};
export default useGoogleFonts;
