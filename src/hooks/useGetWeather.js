import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const fetchWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    try {
      const res = await fetch(url)
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError('could not fetch weather data')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
  return [isLoading, error, weather]
}
