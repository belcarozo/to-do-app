import React, { useCallback, useLayoutEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './styles'
import { TextRectangle } from './TextRectangle'
import { DetailsProps } from './types'
import { strings } from './strings'
import { Color } from '../../styles/Pallete'
import { getTodoByID, updateTodo } from '../../store/todo/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectList, selectTodo } from '../../store/todo/selectors'
import { ListItemType } from '../Home/types'
import { TodoDraft } from '../../store/todo/types'

export const getStateStrings = (list: ListItemType[], id: number) => {
  let showState
  let buttonString
  const index = list.findIndex((elem) => elem.id === id)
  if (index !== -1) {
    showState = list[index].completed ? strings.done : strings.notDone
    buttonString = list[index].completed
      ? strings.doneButton
      : strings.notDoneButton
  } else {
    showState = strings.notDone
    buttonString = strings.notDoneButton
  }
  return { showState, buttonString }
}

const createInfo = (todo: TodoDraft | undefined) => {
  let title: string
  let description: string
  let completed: boolean

  title = todo?.title ?? ''
  description = todo?.description ?? ''
  completed = todo?.completed || false
  return { title, description, completed }
}

export const Details: React.FC<DetailsProps> = ({ route, navigation }) => {
  const { id } = route.params
  const dispatch = useDispatch()

  dispatch(getTodoByID(id))

  const todo = useSelector(selectTodo)
  const { title, description, completed } = createInfo(todo)

  const onPress = useCallback(() => {
    const newTodo = { title, description, completed: !completed }
    const sendTodo = { id, todo: newTodo }
    dispatch(updateTodo(sendTodo))
    navigation.goBack()
  }, [dispatch, navigation, completed, description, title, id])

  const list = useSelector(selectList)
  const { showState, buttonString } = getStateStrings(list, id)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.detailsTitle,
      headerStyle: styles.header,
      headerTintColor: Color.almostWhite,
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <TextRectangle
        id={id}
        navigation={navigation}
        onPress={onPress}
        showState={showState}
        buttonString={buttonString}
        title={title}
        description={description}
      />
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
