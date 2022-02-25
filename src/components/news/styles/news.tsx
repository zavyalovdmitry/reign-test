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
`;

export const Like = styled.div`
  background-color: rgba(96, 96, 96, 0.06);
  position: relative;
  width: 15%;

  & img {
    position: absolute;
    top: 30px;
    right: 27px;
  }

  &:hover {
    & img {
      content: url('images/iconmonstr-favorite-3.svg');
    }
  }
`;

export const Info = styled.div`
  position: relative;
  width: 85%;
  padding: 0 0 0 26px;
  box-sizing: border-box;

  & img {
    position: absolute;
    top: 13px;
    left: 25px;
  }

  // &:hover {
  //   opacity: 0.6;
  //   transition: 0.5s;

  //   ${Like} {
  //     display: none;
  //     opacity: 0.6;
  //     transition: 0.5s;
  //   }
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
