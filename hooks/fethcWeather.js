import { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import api from '../services'

function fethcWeather(defaultLocation) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState(null)

  const getWeatherByCityName = async (cityName) => {
    try {
      setLoading(true)
      const res = await api.get(`weather?q=${cityName}`)
      const data = res.data
      setData({
        city: data.name,
        uf: data.sys.country,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        weather: data.weather,
        wind: data.wind.speed,
        visibility: data.visibility,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setData(null)
      setError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    getWeatherByLocation()
  }, []);

  const getWeatherByLocation = async () => {
    try {
      setLoading(true)
      let { status } = await Location.requestForegroundPermissionsAsync();
      // let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false)
        setData(null)
        setError(null)
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { coords: { latitude, longitude } } = location
      // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
      // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
      const res = await api.get(`onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly`)
      const data = res.data
      const mod = {
        temp: data.current.temp,
        city: data.timezone,
        uf: data.timezone,
        temp_min: 0,
        temp_max: 0,
        weather: data.current.weather,
        wind: data.current.wind_speed,
        visibility: data.current.visibility,
        humidity: data.current.humidity,
        clouds: data.current.clouds,
      }
      setData(mod)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setData(null)
      setError(true)
      console.log(error)
    }
  }

  return { data, error, loading, getWeatherByCityName, getWeatherByLocation }
}

export default fethcWeather
