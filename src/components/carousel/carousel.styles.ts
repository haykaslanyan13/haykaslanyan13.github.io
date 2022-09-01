import styled from 'styled-components'

export default styled.div<any>`
  width: 100%;
  height: 350px;
  background-color: ${({ $mode }) => ($mode == 'light' ? '#343a40' : 'black')};
  position: relative;
  transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
  .Carousel {
    &__arrow {
      width: 50px;
      height: 50px;
      position: absolute;
      font-size: inherit;
      cursor: pointer;
      color: ${({ $mode }) => ($mode == 'light' ? '#fe7900' : '#fff')};
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      &-left {
        top: calc((100% - 50px) / 2);
      }
      &-right {
        top: calc((100% - 50px) / 2);
        right: 0;
      }
    }
  }
`
