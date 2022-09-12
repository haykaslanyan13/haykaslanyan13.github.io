import styled from 'styled-components'

export default styled.div`
  .Layout {
    &__footer {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: end;
      bottom: 0;
      background-image: url('https://image.tmdb.org/t/p/original/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg');
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
      &-text {
        position: relative;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        padding: 5px;
        text-align: center;
      }
    }
  }
`
