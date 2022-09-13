import styled from 'styled-components'

export default styled.div<any>`
  .TopMovies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    ${({ isMobile }) => !isMobile && 'margin-top: 45px'};
    &-title {
      font-size: 25px;
      color: ${({ mode }) => (mode == 'light' ? '#fe7900' : '#fff')};
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      font-weight: bold;
    }
    &-refresh-icon {
      width: 20px;
      height: 20px;
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      filter: ${({ mode }) =>
        mode == 'light'
          ? 'invert(46%) sepia(92%) saturate(1479%) hue-rotate(0deg)\n        brightness(100%) contrast(107%)'
          : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(41deg) brightness(108%) contrast(101%)'};
      cursor: pointer;
    }
  }
`
