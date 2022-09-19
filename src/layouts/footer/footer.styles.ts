import styled from 'styled-components'

export default styled.div<any>`
  .Layout {
    &__footer {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
      background-image: ${({ src }) =>
        `url('https://image.tmdb.org/t/p/original${src}')`};
      background-position: top;
      background-attachment: fixed;
      background-size: cover;
      width: 100%;
      height: calc(100vh - 80px);
      &:before {
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0.75;
      }
      &-video {
        width: 850px;
        @media (max-width: 1200px) {
          width: 800px;
        }
        @media (max-width: 1000px) {
          width: 700px;
        }
        @media (max-width: 800px) {
          width: 600px;
        }
        @media (max-width: 720px) {
          width: 90%;
        }
      }
      &-text {
        position: absolute;
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        text-align: center;
        bottom: 10px;
      }
    }
  }
`
