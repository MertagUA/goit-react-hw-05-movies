import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const CastItemStyled = styled.li`
  width: 300px;
  font-size: 20px;
  text-align: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: ${theme.boxShadow};
  transition: scale 200ms linear;
  &:hover {
    scale: 1.05;
  }
`;

export const CastName = styled.p`
  padding-top: 5px;
`;

export const CastCharacter = styled.p`
  padding-bottom: 5px;
`;
