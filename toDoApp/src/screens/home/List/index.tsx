import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from './ListItem'

const DATA = [
  {
    title: 'Buy groceries',
    subtitle: 'Fruit and vegetables',
  },
  {
    title: 'Clean bathroom',
    subtitle: 'Wash towels',
  },
  {
    title: 'Send e-mail to e-bay',
    subtitle: 'Package was never delivered',
  },
  {
    title: 'Buy new mouse',
    subtitle: 'Old one is broken',
  },
  {
    title: 'Take out the trash',
    subtitle: 'Before the smell gets worse',
  },
]

const renderItem = ({ item }) => (
  <ListItem title={item.title} subtitle={item.subtitle} />
)

export const List = () => <FlatList data={DATA} renderItem={renderItem} />
