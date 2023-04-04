import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const Header = styled.header`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${theme.color.teal};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: ${theme.boxShadow};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 500;
  :not(:first-of-type) {
    margin-left: 30px;
  }
  padding: 10px 0;
  &.active {
    color: white;
  }
`;

export const Main = styled.main`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 0;
`;
