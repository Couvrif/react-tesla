import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 15px;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
`
