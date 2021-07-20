import { useEffect, useState } from 'react'
import api from '../services'

function fethcWeather(defaultLocation) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({})
  const [details, setDetails] = useState({})

  const getWeatherByCityName = async (cityName) => {
    try {
      setLoading(true)
      const res = await api.get(`?q=${cityName}`)
      const data = res.data
      setData({
        city: data.name,
        uf: data.sys.country,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
      })
      setDetails({
        wind: data.wind.speed,
        visibility: data.visibility,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setData({})
      setDetails({})
      setError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    if (defaultLocation) {
      getWeatherByCityName(defaultLocation)
    }
  }, [defaultLocation])

  return { data, details, error, loading, getWeatherByCityName }
}

export default fethcWeather
