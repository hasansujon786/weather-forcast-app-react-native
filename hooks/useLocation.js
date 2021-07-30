import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

function useLocation() {
  const [location, setLocation] = useState({ data: null, status: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation({ data: null, status });
        setError({ message: 'Permission to access location was denied' });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({ data: location, status });
    })();
  }, []);

  return { location, error }
}

export default useLocation
