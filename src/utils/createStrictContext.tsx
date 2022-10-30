import React, { ProviderProps } from 'react'

export function createStrictContext<ContextValueType>(name: string) {
  const context = React.createContext<ContextValueType | null>(null)

  function Provider(props: ProviderProps<ContextValueType>) {
    const value = React.useMemo(
      () => props.value,
      Object.values(props.value as Record<string, unknown>),
    )
    return <context.Provider value={value}>{props.children}</context.Provider>
  }

  Provider.displayName = `${name}Provider`

  function useContext() {
    const value = React.useContext(context)

    if (value === null) {
      throw new Error(`use${name} must be used within a ${name}Provider.`)
    }

    return value
  }

  return [Provider, useContext] as const
}
