import styled from 'styled-components'

export const TeslaInfoOrderWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  font-size: 17px;
  color: black;
  font-weight: 600;

  .carList {
    height: 120px;
    box-sizing: border-box;
    padding: 12px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    border: 2px solid #d0d1d2;
    border-radius: 16px;
    justify-content: space-between;
    .carName {
      margin-left: 16px;
    }
    img {
      width: 70%;
    }
  }
  .activeCar {
    border: 2px solid #3e69df;
  }
`
