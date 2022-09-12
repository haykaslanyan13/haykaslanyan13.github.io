import styled from 'styled-components'

export default styled.div<any>`
  height: ${({ isOpen }) => (isOpen ? '170px' : '80px')};
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
  .Menu_Bar {
    &__wrapper {
      position: fixed;
      height: ${({ isOpen }) => (isOpen ? '170px' : '80px')};
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      z-index: 500;
      top: 0;
      left: 0;
      right: 0;
      background-color: ${({ $mode }) => ($mode == 'night' ? 'black' : '#fff')};
    }
    &__container {
      margin-left: 25px;
      margin-right: 25px;
      margin-top: 18px;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__logo {
      width: 120px;
      height: 40px;
    }
    &__dropdown {
      ${({ $mode }) => $mode == 'night' && 'color: #fff;'}
    }
    &__switch {
      &-container {
        margin-top: 10px;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
      &-label {
        color: ${({ $mode }) => ($mode == 'light' ? '#6c757d' : '#fff')};
        font-weight: 900;
      }
    }
    &__search {
      &-content {
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transition: ${({ isOpen }) =>
          isOpen
            ? 'opacity 0.5s cubic-bezier(0.42, 0, 1, 0.08)'
            : 'opacity 0.2s'};
        margin-top: 20px;
      }
    }
  }
`
