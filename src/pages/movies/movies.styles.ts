import styled from 'styled-components'

export default styled.div<any>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 35px;
  .MoviesView {
    &__movie-container {
      display: grid;
      grid-template-columns: ${({ isMobile }) =>
        isMobile ? '1fr 1fr' : '1fr 1fr 1fr'};
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
`
