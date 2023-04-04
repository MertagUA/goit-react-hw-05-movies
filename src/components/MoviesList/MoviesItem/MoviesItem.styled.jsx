import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const MoviesItemStyled = styled.li`
  width: 300px;
  text-align: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: ${theme.boxShadow};
  transition: scale 200ms linear;
  &:hover {
    scale: 1.05;
  }
`;

export const MoviesItemTitle = styled.p`
  font-size: 20px;
  padding: 10px 0;
`;
