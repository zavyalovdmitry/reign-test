import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 44px 0 42px 0;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  box-sizing: border-box;
  width: 1140px;
  display: block;
  margin: 0;
  font-family: Baskerville;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
  text-transform: uppercase;

  @media (max-width: 1140px) {
    width: 550px;
  }

  @media (max-width: 570px) {
    width: 100%;
    text-align: center;
  }
`;
