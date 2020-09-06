import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components';

const LOGO_HEIGHT = Dimensions.get('window').height * 0.11;
const LOGO_WIDTH = LOGO_HEIGHT * (1950 / 662);

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  align-items: center;
  flex: 1;
  padding-horizontal: 20px;
`;

export const Status = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#429dc1',
})``;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${LOGO_HEIGHT}px;
  width: ${LOGO_WIDTH}px;
  margin-vertical: ${LOGO_HEIGHT}px;
`;

export const Welcome = styled.Text`
  color: #fff;
  font-size: 22;
  font-weight: bold;
  text-align: center;
`;

export const Instruction = styled.Text`
  color: #ddd;
  font-size: 14px;
  margin-top: ${({ bold }) => (bold ? '5px' : '20px')};
  text-align: center;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
