import styled from 'styled-components'

export default styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
  .PageNotFound {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    max-width: 700px;
    text-align: center;
    padding: 0px 80px 0px 80px;
    &__back-button {
      border: none;
      background-color: #fe7900;
      color: #fff;
      padding: 15px 25px 15px 25px;
      border-radius: 11px;
      font-weight: 800;
      font-size: 13.5px;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
    &__404 {
      font-size: 100px;
      font-weight: 800;
      color: ${({ $mode }) => ($mode == 'light' ? '#000000' : '#fff')};
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    }
    &__text {
      font-size: 23px;
      font-weight: 800;
      color: #40424d;
    }
  }
`
