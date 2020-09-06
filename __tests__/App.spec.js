import { render } from '@testing-library/react-native';

test('Example of test', () => {
  const { getByTestId } = render(<Example />)
  const welcomeText = 'Welcome to basic template!'

  expect(getByTestId('welcome-text').props.children).toBe(
    welcomeText
  )
})
