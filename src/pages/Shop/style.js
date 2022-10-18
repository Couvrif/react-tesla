import styled from 'styled-components'

export const ShopWrapper = styled.div`
  margin-top: 44px;
  margin-bottom: 100px;
  .teslaShop {
    img {
      width: 100%;
    }
  }
  .swiper-container {
    margin: 30px auto;
    font-size: 25px;
    text-align: center;
    letter-spacing: 3px;

    .swiper-wrapper {
      margin: 50px auto;
      padding-left: 80px;
      padding-right: 50px;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      overflow-x: scroll;
      justify-content: space-between;
      .swiper-slide {
        width: 90%;
        flex-shrink: 0;
        margin-right: 18px;
        padding: 7px 0;

        img {
          width: 100%;
          box-shadow: 0 0 10px #6e6e6e;
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`
