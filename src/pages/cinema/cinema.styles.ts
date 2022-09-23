import styled from 'styled-components'

export default styled.div<any>`
  margin-top: 45px;
  margin-bottom: 25px;
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
  .Cinema {
    &__title {
      font-size: 24px;
      color: ${({ mode }) => (mode == 'light' ? '#fe7900' : '#fff')};
      font-weight: 800;
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    }
  }
`
