import * as Location from 'expo-location'

import { useEffect, useState } from 'react'

export default function useLocation() {
  const [location, setLocation] = useState(null)

  async function getLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (!granted) return

      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync()

      setLocation({ latitude, longitude })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return location
}
