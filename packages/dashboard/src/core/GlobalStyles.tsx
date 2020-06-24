import { createGlobalStyle, css } from 'styled-components'

const globalStyles = css`

  html {
    box-sizing: border-box;
    font-size: calc(15px + .25vw);
    color: rgba(0,0,0,0.64);
  }
  
  body {
    font-family: system-ui, sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    
    .MuiTypography-root,
    .MuiOutlinedInput-input,
    .MuiButtonBase-root,
    .MuiButton-label,
    p, text {
      font-family: system-ui, sans-serif;
    }
  }
  
  body[dir='rtl'] {
    direction: rtl;
    .MuiSelect-icon {
      right: auto;
      left: 7px;
    }

    font-family: system-ui, sans-serif;
    
    .MuiTypography-root,
    .MuiOutlinedInput-input,
    .MuiButtonBase-root,
    .MuiButton-label,
    p, text {
      font-family: system-ui, sans-serif;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: #2460c3;
    &:hover {
      border-bottom: 1px solid #4373c3;
    }
  }

  .MuiTypography-root,
  .MuiOutlinedInput-input {
    font-family: system-ui, sans-serif;
  }
`

const GlobalStyles = createGlobalStyle`${globalStyles}`

export default GlobalStyles
