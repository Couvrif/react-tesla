import styled from 'styled-components'

export const TeslaWrapper = styled.div`
  padding-top: 44px;
  padding-bottom: 60px;
  .teslaDrive,
  .teslaGuideBook {
    text-align: center;
    box-sizing: border-box;
    padding: 1rem 1.7rem 1.5rem 1.7rem;
    h1 {
      font-weight: 500;
      font-size: 26px;
    }
    h2 {
      font-size: 15px;
      font-weight: 400;
    }
    img {
      width: 100%;
      border-radius: 1rem;
      margin-top: 1.5rem;
    }
    .testDrive {
      width: 100%;
      margin-top: 1.5rem;
      line-height: 2.2rem;
      border-radius: 30px;
      border: 3px solid black;
      background: white;
    }
  }
  .adm-popup-body {
    border-top-left-radius: 20px !important;
  }
`
