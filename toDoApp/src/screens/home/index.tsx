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

// const DATA: listItemType[] = [
//   {
//     title: 'Buy groceries',
//     subtitle: 'Fruit and vegetables',
//     id: 0,
//     checked: false,
//   },
//   {
//     title: 'Clean bathroom',
//     subtitle: 'Wash towels',
//     id: 1,
//     checked: true,
//   },
//   {
//     title: 'Send e-mail to e-bay',
//     subtitle: 'Package was never delivered',
//     id: 2,
//     checked: false,
//   },
//   {
//     title: 'Buy new mouse',
//     subtitle: 'Old one is broken',
//     id: 3,
//     checked: true,
//   },
//   {
//     title: 'Take out the trash',
//     subtitle: 'Before the smell gets worse',
//     id: 4,
//     checked: true,
//   },
// ]

export const homeHeader = ({ navigation }: homeProps) => ({
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

export const Home: React.FC<homeProps> = ({ navigation }) => {
  //const [list, setList] = useState(DATA)

  // const onPress = useCallback(
  //   (id: number) => () => {
  //     const newList = [...list]
  //     const index = newList.findIndex((elem) => elem.id === id)
  //     newList[index].checked = !newList[index].checked
  //     setList(newList)
  //   },
  //   [list],
  // )

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

  // const clearDone = useCallback(() => {
  //   const newList = list.filter((item) => !item.checked)
  //   setList(newList)
  // }, [list])

  const clearDone = useCallback(() => dispatch(clearAllDone()), [dispatch])

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
