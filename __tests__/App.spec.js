import React from 'react';
import { render } from '@testing-library/react-native';
import Main from '~/screens/Main';

test('Example of test', () => {
  const { getByTestId } = render(<Main />)
  const welcomeText = 'Welcome to basic template!'

  expect(getByTestId('welcome-text').props.children).toBe(
    welcomeText
  )
})
