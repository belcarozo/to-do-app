import React, { useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../../navigation/routes'
import { DetailsScreenNavigationProp } from '../../../navigation/types'
import { checkUncheck } from '../../../store/todo'
import { selectList } from '../../../store/todo/selectors'
import { constants } from './strings'
import { styles } from './styles'

export const TextRectangle: React.FC<{
  title: string
  description: string
  id: number
  navigation: DetailsScreenNavigationProp
}> = ({ title, description, id, navigation }) => {
  const dispatch = useDispatch()

  const onPress = useCallback(() => {
    dispatch(checkUncheck(id))
    navigation.navigate(routes.home)
  }, [dispatch, id, navigation])

  const list = useSelector(selectList)
  const index = list.findIndex((elem) => elem.id === id)
  const showState = list[index].checked ? constants.done : constants.notDone
  const buttonString = list[index].checked
    ? constants.notDoneButton
    : constants.doneButton
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
