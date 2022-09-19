import styled from 'styled-components'

export default styled.div<any>`
  .mdc-linear-progress__buffer {
    background-color: #fff !important;
  }
  .mdc-linear-progress__bar-inner {
    background-color: #fe7900;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  .Menu_Bar {
    position: relative;
    &__content {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    &__wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 80px;
      z-index: 500;
      background-color: ${({ $mode }) => ($mode == 'night' ? 'black' : '#fff')};
      transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    }
    &__logo {
      width: 120px;
      height: 40px;
      cursor: pointer;
    }
    &__dropdown {
      ${({ $mode }) => $mode == 'night' && 'color: #fff;'}
    }
    &__input {
      width: 25vw;
    }
    &__linear-progress {
      position: absolute;
      top: 0;
      left: 0;
    }
    &__switch {
      &-container {
        display: flex;
        gap: 1rem;
      }
      &-label {
        color: ${({ $mode }) => ($mode == 'light' ? '#6c757d' : '#fff')};
        font-weight: 900;
      }
    }
  }
`
