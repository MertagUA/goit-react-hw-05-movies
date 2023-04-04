import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: ${theme.color.teal};
  box-shadow: ${theme.boxShadow};
`;

export const FormWrapper = styled.div`
  margin-bottom: 20px;
`;
