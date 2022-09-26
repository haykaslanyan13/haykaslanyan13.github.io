import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 55px;
  .Movies {
    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      @media (max-width: 720px) {
        grid-template-columns: 1fr;
      }
      &-with-pagination {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
    }
    &__not-found {
      &-container {
        display: flex;
        justify-content: center;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        padding: 15px;
        width: 1000px;
        @media (max-width: 1300px) {
          width: 800px;
          padding: 13px;
        }
        @media (max-width: 1100px) {
          width: 600px;
          padding: 10px;
        }
        @media (max-width: 720px) {
          width: 90vw;
          padding: 10px;
        }
      }
      &-text {
        color: #721c24;
        font-size: 23px;
        text-align: center;
      }
    }
  }
  .Skeleton {
    width: 70vw;
  }
`
