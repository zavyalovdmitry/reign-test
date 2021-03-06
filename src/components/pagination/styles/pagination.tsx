import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1140px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 1140px) {
    width: 100%;
  }

  @media (max-width: 570px) {
    width: 100%;
  }
`;

export const Button = styled.p`
  margin-left: 6px;
  padding: 6px 12px 4px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  cursor: pointer;
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
    border: solid 1px #1890ff;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    transition: 0.5s;
    border: solid 1px #1890ff;
  }

  @media (max-width: 570px) {
    display: none;

    &:first-of-type {
      display: block;
    }

    &:last-of-type {
      display: block;
    }
  }
`;
