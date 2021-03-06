import styled from 'styled-components';

export const Container = styled.div`
  * {
    outline: 0;
    box-sizing: border-box;
  }

  font: 16px "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 125px;
`;

export const Title = styled.h1`
  font-size: 64px;
  color: #073B4C;
  margin-bottom: 24px;
`;

export const Pagination = styled.div`
  margin-top: 30px;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 2px 4px 0.25px rgba(0, 0, 0, 0.3);
  background: #fff;
  color: #073B4C;

  svg {
    color: #073B4C;
    height: 20px;
    width: 20px;
  }
`;
