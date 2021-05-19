import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { listItemType } from '../types'

export const List: React.FC<{
  list: listItemType[]
  renderItem: ListRenderItem<listItemType>
}> = ({ list, renderItem }) => {
  const keyExtractor = (item: listItemType) => `${item.id}`
  return (
    <FlatList data={list} renderItem={renderItem} keyExtractor={keyExtractor} />
  )
}
