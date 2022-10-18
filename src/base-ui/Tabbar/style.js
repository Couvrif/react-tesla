import styled from 'styled-components'

export const TabbarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7f7f7;
  z-index: 99;

  .tabbar_content {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .tabbar {
      margin: 0 auto;
      width: 80px;
      color: #c4c4c4;
    }

    .active {
      color: black;
    }
  }

  .tabActive {
    display: none;
  }
`
