import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import ExTouchableOpacity from '../../components/ExTouchableOpacity'
import { STATUSBAR_HEIGHT, SCREEN_WIDTH, searchType } from '../../constants'
import { connect } from 'react-redux'
import { FetchHomeHistoriesRequest } from '../../actions/historyActions'
import { navigation } from '../../rootNavigation'
export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchToolWrapper}>
        <ExTouchableOpacity style={styles.btnBack}>
          <FontAwesome5Icon name="arrow-left" size={20} />
        </ExTouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#333" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.titleWrapper}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Recent searching</Text>
          <TouchableOpacity style={styles.btnModify}>
            <Text>MODIFY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recentSearchWrapper}>
          
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  searchToolWrapper: {
    paddingTop: STATUSBAR_HEIGHT,
    flexDirection: 'row',
    height: 50 + STATUSBAR_HEIGHT,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  btnBack: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    height: 40,
    width: SCREEN_WIDTH - 40 - 15,
    borderRadius: 40,
    backgroundColor: '#ddd',
    paddingHorizontal: 20
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 36,
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  btnModify: {
    fontSize: 16,
    color: '#333'
  },
  recentSearchWrapper: {
    backgroundColor: 'rgba(0,0,0,0.3)',

  },
  recentSearchItem: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',

  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: '#333',
    borderWidth: 0.2
  },
  searchIconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
