import styled from 'styled-components'

export default styled.div<any>`
  width: 100%;
  background-color: ${({ $mode }) => ($mode == 'light' ? '#343a40' : 'black')};
  position: relative;
  transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
  overflow: hidden;
  > div {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 100%;
    padding: 20px;
    transform: translateX();
  }
  .Carousel {
    &__arrow {
      width: 50px;
      height: 50px;
      position: absolute;
      font-size: inherit;
      cursor: pointer;
      color: ${({ $mode }) => ($mode == 'light' ? '#fe7900' : '#fff')};
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      z-index: 100;
      &-left {
        top: calc((100% - 50px) / 2);
        left: 0;
      }
      &-right {
        top: calc((100% - 50px) / 2);
        right: 0;
      }
    }
    &__movie {
      height: 100%;
      > img {
        height: 100%;
        width: calc((100vw - 250px) / 8) !important;
        @media (max-width: 1100px) {
          width: calc((100vw - 160px) / 5) !important;
        }
        @media (max-width: 720px) {
          width: calc((100vw - 70px) / 2) !important;
        }
      }
    }
  }
`
