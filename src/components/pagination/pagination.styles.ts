import styled from 'styled-components'

export default styled.div<any>`
  .ant-pagination-item-link,
  .ant-pagination-item {
    background-color: ${({ mode }) =>
      mode == 'light' ? '#fff' : 'rgb(15, 15, 16)'};
    transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    color: ${({ mode }) =>
      mode == 'light' ? '#fe7900 !important' : '#fff !important'};
    border: none;
    &:hover {
      color: #fe7900 !important;
    }
    > a {
      color: ${({ mode }) =>
        mode == 'light' ? '#fe7900 !important' : '#fff !important'};
      transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      border: none;
      &:hover {
        color: #fe7900 !important;
        ${({ mode }) => mode == 'light' && 'background-color: #e9ecef'};
      }
    }
  }
  .anticon-double-right,
  .anticon-double-left {
    color: #fe7900 !important;
  }
  .ant-pagination-item-ellipsis {
    color: ${({ mode }) =>
      mode == 'light' ? '#fe7900 !important' : '#fff !important'};
    transition: color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
  }
  .ant-pagination-item-active {
    background-color: #fe7900 !important;
    > a {
      color: #fff !important;
      &:hover {
        color: #fff !important;
        background-color: #fe7900 !important;
      }
    }
    &:hover {
      background-color: #fe7900 !important;
    }
  }
`
