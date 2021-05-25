import React, { useCallback } from 'react'

import {
  FlatListProps,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native'
import { ClearAllDone } from './ClearAllDone'
import { List } from './List'
import { ListItem } from './List/ListItem'
import { styles } from './styles'
import { homeProps, listItemType } from './types'
import { routes } from '../../navigation/routes'
import { constants } from './strings'
import { Color } from '../../styles/Pallete'
import { useDispatch, useSelector } from 'react-redux'
import { checkUncheck, clearAllDone } from '../../store/todo'
import { selectList } from '../../store/todo/selectors'

export const Home: React.FC<homeProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  const list = useSelector(selectList)

  const onPress = useCallback(
    (id: number) => () => dispatch(checkUncheck(id)),
    [dispatch],
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
    [navigation, onPress],
  )

  const clearDone = useCallback(() => dispatch(clearAllDone()), [dispatch])

  navigation.setOptions({
    title: constants.homeTitle,
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(routes.newTask)}>
        <Text style={styles.addButton}>{constants.add}</Text>
      </Pressable>
    ),
  })

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
