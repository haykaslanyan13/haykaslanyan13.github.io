import styled from 'styled-components'

export default styled.div<any>`
  display: flex;
  user-select: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  .Movie {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;
      background-color: ${({ mode }) =>
        mode == 'light' ? '#f8f8f8' : '#242526'};
      transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      width: 450px;
      @media (max-width: 1300px) {
        width: 350px;
      }
      @media (max-width: 1100px) {
        width: 300px;
      }
      @media (max-width: 950px) {
        width: 250px;
      }
      @media (max-width: 720px) {
        width: 70vw;
      }
      &-description {
        width: 88%;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        color: ${({ mode }) => (mode == 'light' ? '#000000' : '#fff')};
        transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
        line-height: 16px;
        @media (max-width: 950px) {
          -webkit-line-clamp: 4;
        }
        @media (max-width: 450px) {
          -webkit-line-clamp: 2;
        }
        &-title {
          width: 100%;
          color: ${({ mode }) => (mode == 'light' ? '#000000' : '#fff')};
          transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
          font-size: 18px;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      &-rating {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-container {
          display: flex;
          flex-direction: column;
          color: ${({ mode }) => (mode == 'light' ? '#000000' : '#fff')};
          transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
        }
        &-vote {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 38px;
          height: 38px;
          background-color: #fe7900;
          border-radius: 19px;
          font-weight: 800;
          border: 1px solid #fff;
          color: #fff;
          @media (max-width: 380px) {
            width: 32px;
            height: 32px;
            border-radius: 16px;
          }
        }
        &-stars {
          padding: 0px;
          margin: 0px;
          @media (max-width: 1100px) {
            font-size: 16.5px;
          }
          @media (max-width: 950px) {
            font-size: 12px;
          }
          @media (max-width: 720px) {
            font-size: 18px;
          }
          @media (max-width: 450px) {
            font-size: 14px;
          }
          @media (max-width: 380px) {
            font-size: 11px;
          }
        }
      }
    }
    &__image {
      width: 140px;
      @media (max-width: 1100px) {
        width: 120px;
      }
      @media (max-width: 950px) {
        width: 90px;
      }
      @media (max-width: 720px) {
        width: 20vw;
      }
    }
  }
`
