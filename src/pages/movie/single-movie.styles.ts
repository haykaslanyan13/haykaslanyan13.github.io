import styled, { keyframes } from 'styled-components'

const mount = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

export default styled.div<any>`
  .ant-rate-star {
    margin: 0px 5px 0px 0px !important;
  }
  display: flex;
  flex-direction: column;
  width: 750px;
  height: auto;
  margin-top: 55px;
  animation: ${mount} 1s;
  animation-iteration-count: 1;
  @media (max-width: 1200px) {
    width: 625px;
  }
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 830px) {
    width: 410px;
  }
  @media (max-width: 720px) {
    width: 500px;
  }
  @media (max-width: 530px) {
    width: 90vw;
  }
  .fs-20 {
    font-size: 20px;
  }
  .fs-18 {
    font-size: 16px;
  }
  .SingleMovie {
    &__header {
      ${({ isMobile }) => !isMobile && 'display: flex;'}
      gap: 2rem;
      &-image {
        width: 215px;
        height: auto;
        @media (max-width: 1200px) {
          width: 185px;
          height: auto;
        }
        @media (max-width: 1000px) {
          width: 150px;
          height: 230px;
        }
        @media (max-width: 830px) {
          width: 120px;
          height: 190px;
        }
        @media (max-width: 720px) {
          width: 300px;
          height: auto;
        }
        @media (max-width: 530px) {
          width: 50vw;
          height: auto;
        }
      }
    }
    &__about {
      padding: 10px;
      margin-top: 20px;
      background-color: ${({ mode }) =>
        mode == 'light' ? '#f8f8f8' : '#242526'};
      color: ${({ mode }) => (mode == 'light' ? '#000000' : '#fff')};
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      &-header {
        font-size: 22px;
      }
      &-overview {
        font-size: 16px;
      }
    }
    &__video {
      &-container {
        margin-top: 10px;
      }
      &-rating {
        font-size: 35px;
        color: #fe7900;
        @media (max-width: 1200px) {
          font-size: 30px;
        }
        @media (max-width: 1000px) {
          font-size: 18px;
        }
        @media (max-width: 830px) {
          font-size: 11px;
        }
        @media (max-width: 720px) {
          font-size: 20px;
        }
      }
      &-description {
        ${({ isMobile }) =>
          !isMobile &&
          'display: flex;\n        align-items: end;\n        justify-content: space-between'};
        margin-bottom: 10px;
        &-container {
          display: flex;
          flex-direction: column;
          align-items: end;
          color: ${({ mode }) => (mode == 'light' ? '#000000' : '#fff')};
          transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
        }
      }
    }
  }
`
