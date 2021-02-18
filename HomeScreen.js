import React from 'react'
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

function mySlowFunction(baseNumber) {
  let startTime = (new Date).getTime()
	console.log('mySlowFunction-1')
	let result = 0;
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i)
	}
	console.log('mySlowFunction-2', (new Date).getTime() - startTime)
}

const Scene = () => {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    mySlowFunction(12)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Scene
