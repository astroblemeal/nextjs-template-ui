import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from 'react'

interface TimerContextType {
  state: any
  dispatch: React.Dispatch<any>
}

interface TimerProviderPropsType {
  children: React.ReactNode
}

const TimerContext = React.createContext<TimerContextType>({
  state: null,
  dispatch: () => {},
})

const initialState = { count: 0 }

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const TimerProvider = ({ children }: TimerProviderPropsType) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  )
}

const useTime = () => {
  const timeValue = useContext(TimerContext)

  return timeValue
}

export { TimerProvider, TimerContext, useTime }
