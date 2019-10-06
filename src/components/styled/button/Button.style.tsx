import { ButtonSkeleton } from './Button';
import styled from 'styled-components';
import { IButtonProps } from '../../../interfaces/styled/button/IButtonStyle';

export const Button = styled(ButtonSkeleton)<IButtonProps>`
  color: ${props => (props.secondary ? props.theme.colors.secondary : props.theme.colors.primary)};
  background: ${props => (props.secondary ? props.theme.colors.primary : props.theme.colors.secondary )};
  border: 1px solid ${props => (props.secondary ? props.theme.colors.secondary : props.theme.colors.primary)};
  outline: none;
  padding: 8px 35px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => (props.secondary ? props.theme.colors.primary : props.theme.colors.secondary)};
    background: ${props => (props.secondary ? props.theme.colors.secondary : props.theme.colors.primary)};
    border: 1px solid ${props => (props.secondary ? props.theme.colors.primary : props.theme.colors.secondary)};
  }
  border-radius: ${props => (props.cta ? '30px' : '5px')};
`;
