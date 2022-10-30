import { expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { ExpectRenderErrors } from '../../testing'
import { createStrictContext } from './createStrictContext'

interface User {
  username: string
  email: string
}

const [UserContextProvider, useUserContext] =
  createStrictContext<User>('UserContext')

const consumer = vi.fn()

function Consumer() {
  consumer(useUserContext())
  return <div />
}

it('should throw error if no provider exists', () => {
  expect(ExpectRenderErrors(() => render(<Consumer />))).toThrow(
    `useUserContext must be used within a UserContextProvider.`,
  )

  expect(consumer).not.toHaveBeenCalled()
})

it('should pass value from provider to consumer', () => {
  const value: User = {
    username: 'test',
    email: 'john@example.com',
  }

  render(
    <UserContextProvider value={value}>
      <Consumer />
    </UserContextProvider>,
  )

  expect(consumer).toHaveBeenCalledWith(value)
})

it('should name ProviderComponent properly', () => {
  expect(UserContextProvider.displayName).toBe('UserContextProvider')
})
