import styled from 'styled-components'

export default styled.div`
  .ant-switch {
    background-image: none !important;
    background-color: #fff;
    border: 2px solid rgb(179, 179, 179);
  }
  .ant-switch-handle:before {
    background-color: rgb(179, 179, 179);
    margin-bottom: 3px;
  }
  .ant-switch-checked {
    background-color: #fe7900;
    .ant-switch-handle:before {
      background-color: #fff;
      margin-bottom: 3px;
    }
  }
`
