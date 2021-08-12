import axios from 'axios'
import { API_URL, APP_ID } from '../.env.json'

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use(async (config) => {
  config.params = { appid: APP_ID, units: 'metric' }
  return config
})

export default api

// const data = {
//   "coord": {
//     "lon": -0.13,
//     "lat": 51.51
//   },
//   "weather": [
//     {
//       "id": 300,
//       "main": "Drizzle",
//       "description": "light intensity drizzle",
//       "icon": "09d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 280.32,
//     "pressure": 1012,
//     "humidity": 81,
//     "temp_min": 279.15,
//     "temp_max": 281.15
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 4.1,
//     "deg": 80
//   },
//   "clouds": {
//     "all": 90
//   },
//   "dt": 1485789600,
//   "sys": {
//     "type": 1,
//     "id": 5091,
//     "message": 0.0103,
//     "country": "GB",
//     "sunrise": 1485762037,
//     "sunset": 1485794875
//   },
//   "id": 2643743,
//   "name": "London",
//   "cod": 200
// }

// async function getDAta() {
//   // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//   const cityName = 'London'
//   // const res = await api.get(`weather?q=${cityName}`)
//   // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
//   const res = await api.get(`onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly`)
//   console.log(res.data)
// }

// useEffect(() => {
//   getDAta()
// }, [])

// {
//     "lat": 23.7272,
//     "lon": 90.4093,
//     "timezone": "Asia/Dhaka",
//     "timezone_offset": 21600,
//     "current": {
//         "dt": 1627652794,
//         "sunrise": 1627601218,
//         "sunset": 1627648947,
//         "temp": 28.97,
//         "feels_like": 33.42,
//         "pressure": 1000,
//         "humidity": 74,
//         "dew_point": 23.86,
//         "uvi": 0,
//         "clouds": 75,
//         "visibility": 3500,
//         "wind_speed": 2.57,
//         "wind_deg": 160,
//         "weather": [
//             {
//                 "id": 721,
//                 "main": "Haze",
//                 "description": "haze",
//                 "icon": "50n"
//             }
//         ]
//     },
//     "daily": [
//         {
//             "dt": 1627624800,
//             "sunrise": 1627601218,
//             "sunset": 1627648947,
//             "moonrise": 1627664460,
//             "moonset": 1627621380,
//             "moon_phase": 0.71,
//             "temp": {
//                 "day": 29.87,
//                 "min": 25.78,
//                 "max": 30.86,
//                 "night": 27.66,
//                 "eve": 28.79,
//                 "morn": 26.08
//             },
//             "feels_like": {
//                 "day": 36.73,
//                 "night": 31.81,
//                 "eve": 33.76,
//                 "morn": 26.08
//             },
//             "pressure": 1000,
//             "humidity": 78,
//             "dew_point": 25.6,
//             "wind_speed": 7.42,
//             "wind_deg": 148,
//             "wind_gust": 11.59,
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "moderate rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 100,
//             "pop": 1,
//             "rain": 24.28,
//             "uvi": 7.59
//         },
//         {
//             "dt": 1627711200,
//             "sunrise": 1627687645,
//             "sunset": 1627735316,
//             "moonrise": 1627752840,
//             "moonset": 1627710840,
//             "moon_phase": 0.75,
//             "temp": {
//                 "day": 30.61,
//                 "min": 25.95,
//                 "max": 31.26,
//                 "night": 26.9,
//                 "eve": 29.16,
//                 "morn": 26.02
//             },
//             "feels_like": {
//                 "day": 37.14,
//                 "night": 30.35,
//                 "eve": 34.96,
//                 "morn": 26.02
//             },
//             "pressure": 1002,
//             "humidity": 72,
//             "dew_point": 24.94,
//             "wind_speed": 6.23,
//             "wind_deg": 159,
//             "wind_gust": 10.38,
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "moderate rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 87,
//             "pop": 1,
//             "rain": 18.31,
//             "uvi": 10.03
//         },
//         {
//             "dt": 1627797600,
//             "sunrise": 1627774072,
//             "sunset": 1627821683,
//             "moonrise": 0,
//             "moonset": 1627800360,
//             "moon_phase": 0.77,
//             "temp": {
//                 "day": 31.47,
//                 "min": 26.03,
//                 "max": 32.31,
//                 "night": 27.36,
//                 "eve": 29.73,
//                 "morn": 26.1
//             },
//             "feels_like": {
//                 "day": 37.61,
//                 "night": 31.27,
//                 "eve": 35.82,
//                 "morn": 26.1
//             },
//             "pressure": 1001,
//             "humidity": 66,
//             "dew_point": 24.38,
//             "wind_speed": 4.42,
//             "wind_deg": 162,
//             "wind_gust": 9.05,
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "moderate rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 100,
//             "pop": 1,
//             "rain": 18.1,
//             "uvi": 9.96
//         },
//         {
//             "dt": 1627884000,
//             "sunrise": 1627860499,
//             "sunset": 1627908050,
//             "moonrise": 1627841340,
//             "moonset": 1627889880,
//             "moon_phase": 0.8,
//             "temp": {
//                 "day": 29.99,
//                 "min": 26.42,
//                 "max": 31.17,
//                 "night": 27.71,
//                 "eve": 29.18,
//                 "morn": 26.42
//             },
//             "feels_like": {
//                 "day": 35.01,
//                 "night": 31.8,
//                 "eve": 34.14,
//                 "morn": 26.42
//             },
//             "pressure": 1002,
//             "humidity": 70,
//             "dew_point": 23.97,
//             "wind_speed": 4.94,
//             "wind_deg": 147,
//             "wind_gust": 7.93,
//             "weather": [
//                 {
//                     "id": 501,
//                     "main": "Rain",
//                     "description": "moderate rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 88,
//             "pop": 0.98,
//             "rain": 8.92,
//             "uvi": 8.05
//         },
//         {
//             "dt": 1627970400,
//             "sunrise": 1627946927,
//             "sunset": 1627994415,
//             "moonrise": 1627929960,
//             "moonset": 1627979460,
//             "moon_phase": 0.83,
//             "temp": {
//                 "day": 32.87,
//                 "min": 26.59,
//                 "max": 33.4,
//                 "night": 28.75,
//                 "eve": 30.75,
//                 "morn": 26.59
//             },
//             "feels_like": {
//                 "day": 38.5,
//                 "night": 33.85,
//                 "eve": 36.65,
//                 "morn": 26.59
//             },
//             "pressure": 1002,
//             "humidity": 58,
//             "dew_point": 23.71,
//             "wind_speed": 5.27,
//             "wind_deg": 166,
//             "wind_gust": 7.99,
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 100,
//             "pop": 0.52,
//             "rain": 0.57,
//             "uvi": 12.04
//         },
//         {
//             "dt": 1628056800,
//             "sunrise": 1628033353,
//             "sunset": 1628080780,
//             "moonrise": 1628018880,
//             "moonset": 1628069160,
//             "moon_phase": 0.86,
//             "temp": {
//                 "day": 29.14,
//                 "min": 26.65,
//                 "max": 30.75,
//                 "night": 28.29,
//                 "eve": 30.75,
//                 "morn": 26.65
//             },
//             "feels_like": {
//                 "day": 34.04,
//                 "night": 32.5,
//                 "eve": 35.83,
//                 "morn": 26.65
//             },
//             "pressure": 1003,
//             "humidity": 75,
//             "dew_point": 24.33,
//             "wind_speed": 4.2,
//             "wind_deg": 130,
//             "wind_gust": 7.63,
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 100,
//             "pop": 1,
//             "rain": 5.33,
//             "uvi": 13
//         },
//         {
//             "dt": 1628143200,
//             "sunrise": 1628119780,
//             "sunset": 1628167143,
//             "moonrise": 1628108040,
//             "moonset": 1628158740,
//             "moon_phase": 0.89,
//             "temp": {
//                 "day": 33.47,
//                 "min": 26.39,
//                 "max": 33.65,
//                 "night": 28.7,
//                 "eve": 31.36,
//                 "morn": 26.39
//             },
//             "feels_like": {
//                 "day": 39.61,
//                 "night": 33.53,
//                 "eve": 37.33,
//                 "morn": 26.39
//             },
//             "pressure": 1001,
//             "humidity": 57,
//             "dew_point": 23.91,
//             "wind_speed": 5.68,
//             "wind_deg": 158,
//             "wind_gust": 7.64,
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 27,
//             "pop": 0.52,
//             "rain": 0.31,
//             "uvi": 13
//         },
//         {
//             "dt": 1628229600,
//             "sunrise": 1628206207,
//             "sunset": 1628253506,
//             "moonrise": 1628197500,
//             "moonset": 1628248260,
//             "moon_phase": 0.92,
//             "temp": {
//                 "day": 32.97,
//                 "min": 26.71,
//                 "max": 33.38,
//                 "night": 28.66,
//                 "eve": 30.76,
//                 "morn": 26.71
//             },
//             "feels_like": {
//                 "day": 39.44,
//                 "night": 33.62,
//                 "eve": 36.68,
//                 "morn": 29.84
//             },
//             "pressure": 1002,
//             "humidity": 60,
//             "dew_point": 24.37,
//             "wind_speed": 7.12,
//             "wind_deg": 150,
//             "wind_gust": 10.01,
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": 94,
//             "pop": 0.75,
//             "rain": 1.27,
//             "uvi": 13
//         }
//     ]
// }
