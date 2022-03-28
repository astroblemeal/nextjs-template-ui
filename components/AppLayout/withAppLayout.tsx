import { FunctionComponentType } from '@interfaces/common/FunctionComponentType'

export const withAppLayout = (Component: React.FC<FunctionComponentType>) => {
  function Hoc(props: FunctionComponentType) {
    const newProps = {}
    return <Component {...newProps} {...props} />
  }

  Hoc.displayName = `withAppLayout(${
    Component.displayName ?? Component.name ?? 'Component'
  })`

  return Hoc
}
