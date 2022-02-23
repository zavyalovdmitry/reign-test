import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 1140px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 30px;
  grid-column-gap: 40px;
  grid-auto-flow: column;

  margin-top: 38px;
`;

export const Item = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 6px;
  height: 90px;
  max-width: 550px;
  background: linear-gradient(90deg, white 482px, rgba(96, 96, 96, 0.06) 0);

  padding: 0 0 0 26px;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;

  position: relative;

  & img {
    position: absolute;

    &:first-of-type {
      top: 13px;
      left: 25px;
    }

    &:last-of-type {
      top: 35px;
      right: 20px;
    }
  }
`;

export const SubTitle = styled.p`
  margin-top: 16px;
  margin-left: 20px;
  font-family: Roboto-Regular;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
`;

export const Title = styled.h2`
  font-family: Roboto-Medium;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;
