import { NavigationContainerRef, ParamListBase } from '@react-navigation/native'
import React from 'react'

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef()

export const goBack = () => {
  navigationRef.current?.goBack()
}

export const navigate = (name: string, params: ParamListBase) => {
  navigationRef.current?.navigate(name, params)
}
