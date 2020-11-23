import styled from 'styled-components';
import { Close } from '@styled-icons/material';

export const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin: 8px 0;
  box-shadow: 2px 2px 4px 0.25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  padding: 8px 20px;
  border-radius: 2px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
`;

export const CancelIcon = styled(Close)`
  color: #EF476F;
  height: 24px;
  width: 24px;
  align-self: center;
  cursor: pointer;
`;
