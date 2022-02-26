import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 1140px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: 54px;

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

export const Button = styled.p`
  box-sizing: border-box;
  width: 98px;
  height: 31px;
  border: solid 1px #d6d6d6;
  font-family: Roboto-Medium;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #606060;
  padding-top: 2px;
  cursor: pointer;
  transition: 0.2s;

  &.active {
    border: solid 1px #1797ff;
    cursor: default;
    color: #1797ff;
  }

  &:hover {
    border: solid 1px #1797ff;
    // cursor: default;
    color: #1797ff;
    transition: 0.5s;
  }

  &:first-of-type {
    border-radius: 2px 0 0 2px;
    border-right-width: 0;
  }

  &:last-of-type {
    border-radius: 0 2px 2px 0;
  }
`;
