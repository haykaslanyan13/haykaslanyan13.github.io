import styled from 'styled-components'

export default styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 20vw;
  .ant-card-body {
    padding: 0px !important;
  }
  .fw-800 {
    font-weight: 800;
  }
  .grey {
    color: rgba(0, 0, 0, 0.5);
    color: ${({ mode }) => (mode == 'night' ? '#fff' : 'rgba(0, 0, 0, 0.5)')};
    transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
  }
  .TopMovie {
    &-card {
      position: relative;
      display: flex !important;
      width: 100%;
      transition: all 0.2s;
      border: none;
      margin-top: 25px;
      user-select: none;
      cursor: pointer;
      &:hover {
        transform: scale(1.04);
        box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
        border: none;
      }
      &__image {
        width: 90px;
      }
      &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 5px;
        font-size: 17px;
        color: ${({ mode }) => (mode == 'night' ? '#fff' : 'black')};
        background-color: ${({ mode }) =>
          mode == 'night' ? '#242526' : '#f8f8f8'};
        transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      }
      &-rating {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #fe7900;
        border-radius: 20px;
        border: 1px solid #fff;
        bottom: 5px;
        right: 5px;
        &__vote {
          color: #fff;
        }
      }
    }
  }
`
