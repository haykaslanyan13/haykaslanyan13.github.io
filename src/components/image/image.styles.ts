import styled from 'styled-components'

export default styled.div<any>`
  .Image {
    display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
    width: 100%;
    &-loading {
      display: ${({ isLoading, loaderClassName }) =>
        isLoading && loaderClassName ? 'flex !important' : 'none'};
      justify-content: center !important;
      align-items: center !important;
      background-color: #f8f8f8;
    }
  }
`
