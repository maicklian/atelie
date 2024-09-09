import React, { useState } from 'react'
import { RefreshControl, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import {images} from '../../constants'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    //
    setRefreshing(false)
  }

    return (
      <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }}>
        <FlatList 
          data={[]}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <Text>{item.id}</Text>
          )}
          ListHeaderComponent={() => (
            <View style={{ display: 'flex', marginLeft: 28, marginRight: 28, paddingLeft: 16, paddingRight: 16, marginTop: 24}}>
              <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <View>
                  <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, lineHeight: 20, color: 'grey'}}>Welcome Back</Text>
                  <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize:20, lineHeight: 20, color: 'grey'}}>Eduardo</Text>
                </View>
              </View>

            <SearchInput />

            <View style={{ width: '100%', flex: 1}}>
              <Text style={{ color: 'grey' }}>
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}/>
            </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No posts found"
              subtitle="Be the first"
            />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshing} />}
        />
      </SafeAreaView>
    )
}

export default Home
