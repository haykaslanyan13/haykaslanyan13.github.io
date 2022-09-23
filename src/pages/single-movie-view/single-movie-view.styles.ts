import styled from 'styled-components'

export default styled.div<any>`
  display: flex;
  ${({ isMobile }) =>
    isMobile && 'flex-direction: column;  align-items: center;'}
  width: 100%;
  justify-content: center;
  gap: 2rem;
  .TopMovies {
    &__container {
      display: flex;
      flex-direction: column;
    }
  }
`
