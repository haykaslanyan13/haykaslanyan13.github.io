import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .MoviesView {
    &__movie-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
`
