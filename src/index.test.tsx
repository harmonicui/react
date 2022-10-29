import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

it('should work', () => {
  const { getByText } = render(<div>Hello World</div>)
  expect(getByText('Hello World')).toHaveTextContent('Hello World')
})
