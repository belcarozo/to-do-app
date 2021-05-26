import React, { useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../../navigation/routes'
import { DetailsScreenNavigationProp } from '../../../navigation/types'
import { getTodoByID, updateTodo } from '../../../store/todo/actions'
import { selectList, selectTodo } from '../../../store/todo/selectors'
import { ListItemType } from '../../home/types'
import { strings } from './strings'
import { styles } from './styles'

const getStateStrings = (list: ListItemType[], id: number) => {
  let showState
  let buttonString
  const index = list.findIndex((elem) => elem.id === id)
  if (index !== -1) {
    showState = list[index].completed ? strings.done : strings.notDone
    buttonString = list[index].completed
      ? strings.notDoneButton
      : strings.doneButton
  } else {
    showState = strings.notDone
    buttonString = strings.notDoneButton
  }
  return { showState, buttonString }
}

export const TextRectangle: React.FC<{
  id: number
  navigation: DetailsScreenNavigationProp
}> = ({ id, navigation }) => {
  const dispatch = useDispatch()

  dispatch(getTodoByID(id))

  const todo = useSelector(selectTodo)
  let title: string
  let description: string
  let completed: boolean

  title = todo?.title ?? ''
  description = todo?.description ?? ''
  completed = todo?.completed || false

  const onPress = useCallback(() => {
    const newTodo = { title, description, completed: !completed }
    const sendTodo = { id, todo: newTodo }
    dispatch(updateTodo(sendTodo))
    navigation.navigate(routes.home)
  }, [dispatch, navigation, completed, description, title, id])

  const list = useSelector(selectList)
  const { showState, buttonString } = getStateStrings(list, id)

  return (
    <View style={styles.textRectangle}>
      <Text style={styles.state}>{showState}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.center}>
        <Pressable onPress={onPress}>
          <Text style={styles.clear}>{buttonString}</Text>
        </Pressable>
      </View>
    </View>
  )
}
