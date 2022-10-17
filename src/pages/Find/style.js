import styled from 'styled-components'

export const FindWrapper = styled.div`
  .container {
    margin-top: 44px;
    /* margin-bottom: 60px; */
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 32px 24px;
    .teslaFind {
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }

    .teslaNews {
      .news {
        height: 48px;
        margin: 24px 0;
        padding: 16px 0;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .newsLeft {
          h1 {
            font-size: 16px;
            font-weight: normal;
          }
          p {
            margin-top: 15px;
            font-size: 12px;
            color: #c4c4c4;
            font-weight: 600;
          }
        }

        .newsRight {
          width: 30%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`
