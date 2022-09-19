import styled from 'styled-components'

export default styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 100%;
  .MovieDescription {
    > div {
      padding: 11px;
      transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      &:nth-child(odd) {
        background-color: ${({ mode }) =>
          mode == 'night' ? '#242526' : '#f8f8f8'};
      }
      &:nth-child(even) {
        background-color: ${({ mode }) =>
          mode == 'night'
            ? 'background-color: #000000'
            : 'background-color: #fff'};
      }
    }
    &-item {
      color: ${({ mode }) => (mode == 'night' ? '#fff' : '#000000')};
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    }
  }
`
