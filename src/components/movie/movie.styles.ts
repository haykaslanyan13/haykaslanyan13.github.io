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
      display: block;
      width: 100%;
      transition: transform 0.3s;
      opacity: 1;
      &-container {
        overflow: hidden;
        position: relative;
        &:hover .Movie__image {
          opacity: 0.3;
          transform: scale(1.4);
        }
        &:hover .Movie__image-description {
          opacity: 0.2;
        }
      }
      &-description {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: grey;
        opacity: 0;
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
