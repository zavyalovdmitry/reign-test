import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 96px;
  width: 1140px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  // margin-top: 70px;
`;

export const Button = styled.p`
  // width: 32px;
  // height: 32px;
  margin: 0 8px;
  padding: 6px 12px 4px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  cursor: pointer;

  width: 8px;
  height: 22px;
  font-family: Roboto-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);

  &.active {
    // width: 32px;
    // height: 32px;
    // margin: 0 8px;
    // padding: 6px 12px 4px;
    // border-radius: 6px;
    background-color: #1890ff;
    cursor: default;
    color: #fff;
  }
`;
