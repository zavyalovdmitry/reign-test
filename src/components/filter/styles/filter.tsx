import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 1140px;
  box-sizing: border-box;
  margin-top: 63px;
`;

export const Select = styled.select`
  box-sizing: border-box;
  opacity: 0.85;
  // position: relative;
  padding: 5px 12px 5px 12px;

  width: 240px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;

  font-family: Roboto-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;

  &img {
    position: absolute;
  }
`;
