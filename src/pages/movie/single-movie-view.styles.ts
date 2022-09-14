import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
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
