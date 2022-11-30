import React, { PureComponent, useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, TextInput, SafeAreaView, Dimensions, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import * as navigation from '../../rootNavigation'
import GroupCategories from '../../components/GroupCategories'
import { connect } from 'react-redux'
import ExTouchableOpacity from '../../components/ExTouchableOpacity'
import { FetchGroupHistoriesRequest } from '../../actions//historyActions'

export default function GroupSearch(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchToolWrapper}>
        <ExTouchableOpacity style={styles.btnBack}>
          <FontAwesome5Icon size={20} name="arrow-left"></FontAwesome5Icon>
        </ExTouchableOpacity>
        <TextInput placeholder="Search groups" style={styles.searchInput}>

        </TextInput>
      </View>
      <View style={styles.historyWrapper}>
        <View style={styles.historyTitle}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Recent searched groups
          </Text>
          <ExTouchableOpacity>
            <Text>
              MODIFY
            </Text>
          </ExTouchableOpacity>
        </View>
      </View>
      <View style={styles.groupCategoriesWrapper}>
        <View style={styles.groupCategoriesTitle}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Popular group categories</Text>
        </View>
        <ExTouchableOpacity style={styles.btnSeeAll}>
          <Text>See all</Text>
          <FontAwesome5Icon name="arrow-right"></FontAwesome5Icon>
        </ExTouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  searchToolWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: '#ddd'
  },
  btnBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    borderRadius: 48,
    backgroundColor: '#ddd',
    width: screenWidth - 60,
    height: 35,
    paddingHorizontal: 15
  },
  historyWrapper: {
    borderBottomWidth: 5,
    borderBottomColor: '#ddd'
  },
  historyTitle: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: '#ddd'
  },
  searchResult: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  groupCategoriesWrapper: {

  },
  groupCategoriesTitle: {
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#ddd'
  },
  btnSeeAll: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    height: 40,
    alignItems: 'center',

  }
})
