import Styled from 'styled-components'

type Props = {
  margin?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export const Margin = Styled.div`
  margin-top: ${(props: Props) => (props.top ? props.top : '')};
  margin-bottom: ${(props: Props) => (props.bottom ? props.bottom : '')};
  margin-left: ${(props: Props) => (props.left ? props.left : '')};
  margin-right: ${(props: Props) => (props.right ? props.right : '')};
  margin: ${(props: Props) => (props.margin ? props.margin : '')};
`
