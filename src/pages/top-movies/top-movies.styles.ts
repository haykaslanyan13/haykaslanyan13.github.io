import styled from 'styled-components'

export default styled.div<any>`
  width: 350px;
  @media (max-width: 1200px) {
    width: 310px;
  }
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 720px) {
    width: 500px;
  }
  @media (max-width: 530px) {
    width: 90vw;
  }
  .TopMovies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ isMobile }) => !isMobile && 'margin-top: 45px'};
    &-title {
      font-size: 24px;
      color: ${({ mode }) => (mode == 'light' ? '#fe7900' : '#fff')};
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      font-weight: bold;
    }
    &-refresh-icon {
      width: 22px;
      height: 22px;
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      filter: ${({ mode }) =>
        mode == 'light'
          ? 'invert(46%) sepia(92%) saturate(1479%) hue-rotate(0deg)\n        brightness(100%) contrast(107%)'
          : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(41deg) brightness(108%) contrast(101%)'};
      cursor: pointer;
    }
  }
`
