import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { ListItemType } from '../types'

export const List: React.FC<{
  list: ListItemType[]
  renderItem: ListRenderItem<ListItemType>
}> = ({ list, renderItem }) => {
  const keyExtractor = (item: ListItemType) => `${item.id}`
  return (
    <FlatList data={list} renderItem={renderItem} keyExtractor={keyExtractor} />
  )
}
