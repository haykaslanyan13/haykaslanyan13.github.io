import styled, { keyframes } from 'styled-components'

const mount = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

export default styled.div<any>`
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
  .SingleMovie {
    &__header {
      display: flex;
      gap: 2rem;
      &-image {
        width: 215px;
        @media (max-width: 1200px) {
          width: 185px;
        }
        @media (max-width: 1000px) {
          width: 150px;
          height: 230px;
        }
        @media (max-width: 830px) {
          width: 120px;
          height: 190px;
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
  }
`
