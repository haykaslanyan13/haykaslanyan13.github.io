import styled, { keyframes } from 'styled-components'

const mount = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

export default styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 35px;
  animation: ${mount} 1s;
  animation-iteration-count: 1;
  @media (max-width: 720px) {
    margin-top: 70px;
  }
  .MoviesView {
    &__movie-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
      }
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
`
