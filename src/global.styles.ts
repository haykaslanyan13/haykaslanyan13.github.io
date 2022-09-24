import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<any>`
    body {
    * {
        font-family: Montserrat, sans-serif;
    }
    background-color: ${({ mode }) =>
      mode == 'light' ? '#fff' : 'rgb(15,15,16)'};
    transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
    margin: 0;
  },
 
`
