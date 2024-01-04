import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2021-11-25 00:00:00',
    main: {
      temp_max: 5,
      temp_min: 3
    },
    weather: [
      {
        main: 'light rain'
      }
    ]
  },
  {
    dt_txt: '2022-11-25 00:00:00',
    main: {
      temp_max: 5,
      temp_min: 3
    },
    weather: [
      {
        main: 'light rain'
      }
    ]
  },
  {
    dt_txt: '2023-11-25 00:00:00',
    main: {
      temp_max: 5,
      temp_min: 3
    },
    weather: [
      {
        main: 'light rain'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <Text>UpcomingWeather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather
