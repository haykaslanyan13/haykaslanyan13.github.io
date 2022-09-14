import styled, { keyframes } from 'styled-components'

const mount = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  animation: ${mount} 1s;
  animation-iteration-count: 1;

  .SingleMovie {
    &__header {
      display: flex;
      gap: 2rem;
      &-image {
        width: 240px;
      }
    }
  }
`
