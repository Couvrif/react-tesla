import styled from 'styled-components'

export const SwiperListWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  padding-bottom: 2rem;
  .rotationChart-img {
    width: 100vw;
    display: inline-block;
  }
  .carName {
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    position: absolute;
    font-size: 1.5rem;
    font-weight: 400;
    color: black;
  }
  .carBuy {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 1000;
    width: 20rem;
    top: 80%;
    background-color: #4e4e53;
    line-height: 2.5rem;
    border-radius: 30px;
    color: white;
    border: 0;
  }
  .swiper-pagination {
    top: 93%;
    z-index: 200;
  }
  .swiper-pagination-bullet {
    border-radius: 0px;
    opacity: 0.3;
    width: 1.5rem;
    height: 0.15rem;
    background: white;
    margin: 0.05rem !important;
    border-radius: 1px;
  }
  .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
  }
`
