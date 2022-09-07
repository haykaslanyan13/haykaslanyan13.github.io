import styled from 'styled-components'

export default styled.div`
  .ant-rate-star,
  .ant-rate-star-zero {
    margin: 0px !important;
  }
  .Movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    &__image {
      width: 100%;
      transition: transform 0.3s;
      &-container {
        overflow: hidden;
        position: relative;
      }
      &-description {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: red;
        // opacity: 0.5;
        z-index: -1;
      }
      &:hover {
        transform: scale(1.4);
      }
    }
    &__title {
      color: white;
      font-size: 18px;
      text-align: center;
      width: 100%;
      font-weight: 800;
      font-family: Montserrat, sans-serif;
    }
  }
`
