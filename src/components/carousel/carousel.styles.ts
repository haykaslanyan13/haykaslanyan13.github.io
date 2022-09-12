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
    transform: translateX(${({ positionX }) => `${positionX}px`});
    transition: transform 0.5s ease 0s;
    height: auto;
    user-select: none;
    cursor: pointer;
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
        ${({ positionX }) =>
          positionX == 0
            ? 'opacity: 0.5; cursor: initial'
            : 'opacity: 1; cursor: pointer'}
      }
      &-right {
        top: calc((100% - 50px) / 2);
        right: 0;
        ${({ positionX, maxScroll }) =>
          Math.abs(positionX) == maxScroll + 20
            ? 'opacity: 0.5; cursor: initial'
            : 'opacity: 1; cursor: pointer'}
      }
    }
    &__movie {
      height: 100%;
      > img {
        height: auto;
        width: calc((100vw - 250px) / 8) !important;
        @media (max-width: 1200px) {
          width: calc((100vw - 160px) / 5) !important;
        }
        @media (max-width: 720px) {
          width: calc((100vw - 70px) / 2) !important;
        }
      }
    }
  }
`
