import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme/theme';

export const AddictionalInfoList = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  ma
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  width: 120px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  background-color: ${theme.color.teal};
  box-shadow: ${theme.boxShadow};
`;
