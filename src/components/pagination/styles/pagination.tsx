import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 96px;
  margin-bottom: 96px;
  width: 1140px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const Button = styled.p`
  margin-left: 8px;
  padding: 6px 12px 4px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  cursor: pointer;

  // width: 8px;
  // height: 22px;
  font-family: Roboto-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  transition: 0.5s;

  &:firts-of-type {
    margin-left: 0;
  }

  &.active {
    background-color: #1890ff;
    cursor: default;
    color: #fff;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
`;
