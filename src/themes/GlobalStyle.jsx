import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset Style */
  *,*::after,*::before{
      padding:0;
      margin:0;
      box-sizing:border-box;
  }

  /* html */
  html{
      --pink:${({ theme }) => theme.colors.pink};
      --light-pink:${({ theme }) => theme.colors.lightPink};
      --very-dark-cyan:${({ theme }) => theme.colors.veryDarkCyan};
      --very-pale-blue:${({ theme }) => theme.colors.VeryPaleBlue};
      --heading-font:${({ theme }) => theme.typography.headings};
      --body-font:${({ theme }) => theme.typography.body};
      font-family:var(--body-font);
  }
 
 h1,h2,h3,h4,h5,h6{
     font-family:var(--heading-font)
 }
`;

export default GlobalStyle;