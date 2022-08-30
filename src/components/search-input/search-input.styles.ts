import styled from 'styled-components'

export default styled.div`
  width: 40%;
  .Search-input {
    &__icon {
      height: 20px;
      width: 20px;
      filter: invert(89%) sepia(3%) saturate(8%) hue-rotate(315deg)
        brightness(83%) contrast(82%);
    }
    &__input {
      border: 2px solid #ffa502;
      border-radius: 5px;
      &:hover {
        border: 2px solid #ffa502;
      }
    }
  }
`
