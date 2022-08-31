import styled from 'styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  height: 80px;
  font-family: Montserrat, sans-serif;
  .Menu_Bar {
    &__content {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    &__logo {
      width: 120px;
      height: 40px;
      cursor: pointer;
    }
    &__input {
      width: 25vw;
    }
    &__switch {
      &-container {
        display: flex;
        gap: 1rem;
      }
      &-label {
        color: #6c757d;
        font-weight: 900;
      }
    }
  }
`
