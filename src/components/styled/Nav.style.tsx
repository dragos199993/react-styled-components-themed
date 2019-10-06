import styled from 'styled-components';
import { INavProps } from '../../interfaces/styled/INav';

export const Nav = styled.nav<INavProps>`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: 25px 0;
  border-bottom: 1px solid #000;
  transition: all 0.3s;
  .navbar-brand {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    font-size: 24px;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  li {
    a {
      color: ${props => props.theme.colors.secondary};
      text-decoration: none;  
    }
    padding: 0 20px;
  }
`;
