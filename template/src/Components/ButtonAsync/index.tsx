import Styled from 'styled-components'
import { Button } from 'Components/Button'

export const ButtonAsync = Styled(Button)`
  position: relative;

  :after {
    content: "";
    background-color: ${(props) => props.theme.colors.violetOpacity('0.15')};
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }
  
  :active:after {
    width: 0%;
    opacity: 1;
    transition: 0s
  }
`
