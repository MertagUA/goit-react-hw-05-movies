import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme/theme';

export const ButtonLink = styled(Link)`
  display: inline-block;
  width: 120px;
  padding: 5px;
  text-align: center;
  border: 1px solid ${theme.color.black};
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  background-color: ${theme.color.teal};
`;
