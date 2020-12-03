import styled from 'styled-components';
import { Delete } from '@styled-icons/material';

export const List = styled.ul`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background: #fff;
  box-shadow: 2px 2px 4px 0.25px rgba(0, 0, 0, 0.3);
  color: #073B4C;
  &:nth-of-type(odd) {
    background: #f1f1f1;
  }
`;

export const DeleteIcon = styled(Delete)`
  color: #EF476F;
  height: 20px;
  width: 20px;
`;
