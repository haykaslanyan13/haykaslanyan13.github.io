import styled from 'styled-components'

export default styled.div<any>`
  font-family: Montserrat, sans-serif;
  .ant-rate-star,
  .ant-rate-star-zero {
    margin: 0px !important;
  }
  .Movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 225px;
    &__image {
      display: block;
      width: 100%;
      transition: transform 0.3s;
      opacity: 1;
      &-loading {
        display: block;
        width: 100%;
        background-color: black;
        height: 400px;
      }
      &-container {
        overflow: hidden;
        position: relative;
        &:hover .Movie__image {
          background-color: rgba(100, 100, 100, 0.5);
          transform: scale(1.4);
        }
        &:hover .Movie__image-description {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.6);
        }
      }
      &-description {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        display: flex;
        flex-direction: column;
        padding: 10px;
        user-select: none;
        cursor: pointer;
        &-item {
          color: white;
          font-weight: 800;
        }
        &-title {
          color: white;
          font-weight: 800;
          padding-bottom: 5px;
          font-size: 20px;
        }
        &-rating {
          background-color: #fe7900;
          text-align: center;
          width: 38px;
          height: 38px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid white;
          &-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
          }
          &-value {
            color: white;
            font-weight: 800;
            font-size: 17px;
          }
        }
      }
    }
    &__title {
      color: ${({ mode }) => (mode == 'light' ? 'black' : 'white')};
      transition: color 0.4s;
      font-size: 18px;
      text-align: center;
      width: 100%;
      font-weight: 800;
      font-family: Montserrat, sans-serif;
    }
  }
`
