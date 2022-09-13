import styled from 'styled-components'

export default styled.div<any>`
  margin-top: 45px;
  margin-bottom: 25px;
  .Cinema {
    &__title {
      font-size: 25px;
      color: ${({ mode }) => (mode == 'light' ? '#fe7900' : '#fff')};
      font-weight: 800;
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    }
  }
`
