import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 1140px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 30px;
  grid-column-gap: 40px;
  margin-top: 38px;

  &.nofilter {
    margin-top: 117px;
  }

  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 570px) {
    padding: 0 10px;
  }
`;

export const Like = styled.div`
  background-color: rgba(96, 96, 96, 0.06);
  position: relative;
  width: 12%;

  & img {
    position: absolute;
    top: 34px;
    right: 21px;
    transition: 0.5s;
  }

  &:hover {
    & img {
      transform: scale(1.5);
      transition: 0.2s;
    }
  }

  @media (max-width: 570px) {
    width: 66px;
  }
`;

export const Info = styled.div`
  position: relative;
  width: 88%;
  padding: 0 0 0 26px;
  box-sizing: border-box;

  & img {
    position: absolute;
    top: 13px;
    left: 25px;
  }
`;

export const Item = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 6px;
  height: 90px;
  width: 550px;
  display: flex;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }

  @media (max-width: 570px) {
    width: 100%;
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
