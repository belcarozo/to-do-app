import React, { useCallback, useState } from 'react'

import { FlatListProps, SafeAreaView, View } from 'react-native'
import { ClearAllDone } from './ClearAllDone'
import { List } from './List'
import { ListItem } from './List/ListItem'
import { styles } from './styles'
import { listItemType } from './types'
import { homeProps } from '../../navigation/types'

const DATA: listItemType[] = [
  {
    title: 'Buy groceries',
    subtitle: 'Fruit and vegetables',
    id: 0,
    checked: false,
  },
  {
    title: 'Clean bathroom',
    subtitle: 'Wash towels',
    id: 1,
    checked: true,
  },
  {
    title: 'Send e-mail to e-bay',
    subtitle: 'Package was never delivered',
    id: 2,
    checked: false,
  },
  {
    title: 'Buy new mouse',
    subtitle: 'Old one is broken',
    id: 3,
    checked: true,
  },
  {
    title: 'Take out the trash',
    subtitle: 'Before the smell gets worse',
    id: 4,
    checked: true,
  },
]

export const Home: React.FC<homeProps> = ({ navigation }) => {
  const [list, setList] = useState(DATA)

  const onPress = useCallback(
    (id: number) => () => {
      const newList = [...list]
      const index = newList.findIndex((elem) => elem.id === id)
      newList[index].checked = !newList[index].checked
      setList(newList)
    },
    [list],
  )

  const renderItem: FlatListProps<listItemType>['renderItem'] = useCallback(
    ({ item }) => (
      <ListItem
        title={item.title}
        subtitle={item.subtitle}
        checked={item.checked}
        id={item.id}
        onPress={onPress}
        navigation={navigation}
      />
    ),
    [onPress, navigation],
  )

  const clearDone = useCallback(() => {
    const newList = list.filter((item) => !item.checked)
    setList(newList)
  }, [list])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <List list={list} renderItem={renderItem} />
      </View>
      <View style={styles.center}>
        <ClearAllDone clearDone={clearDone} />
      </View>
    </SafeAreaView>
  )
}
