import React, { useCallback, useEffect, useLayoutEffect } from 'react'

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
import { HomeProps, ListItemType } from './types'
import { routes } from '../../navigation/routes'
import { strings } from './strings'
import { Color } from '../../styles/Pallete'
import { useDispatch, useSelector } from 'react-redux'
import { selectList } from '../../store/todo/selectors'
import { deleteTodo, getTodos, updateTodo } from '../../store/todo/actions'

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  const list = useSelector(selectList)

  const onPress = useCallback(
    (
      title: string,
      description: string,
      id: number,
      completed: boolean,
    ) => () => {
      const todo = { title, description, completed: !completed }
      const sendTodo = {
        id,
        todo,
      }
      dispatch(updateTodo(sendTodo))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(getTodos({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onPressTitle = useCallback(
    (title, description, completed, id) => () => {
      navigation.navigate(routes.details, {
        title,
        description,
        completed,
        id,
      })
    },
    [navigation],
  )
  const renderItem: FlatListProps<ListItemType>['renderItem'] = useCallback(
    ({ item }) => (
      <ListItem
        title={item.title}
        description={item.description}
        completed={item.completed}
        id={item.id}
        onPress={onPress}
        onPressTitle={onPressTitle}
      />
    ),
    [onPress, onPressTitle],
  )

  const clearDone = useCallback(() => {
    list.forEach((item) => {
      if (item.completed) {
        dispatch(deleteTodo(item.id))
      }
    })
  }, [dispatch, list])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.homeTitle,
      headerStyle: styles.header,
      headerTintColor: Color.almostWhite,
      headerRight: () => (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(routes.newTask)}>
          <Text style={styles.addButton}>{strings.add}</Text>
        </Pressable>
      ),
    })
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
