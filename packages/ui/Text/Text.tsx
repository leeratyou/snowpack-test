import React, { FC, Component } from 'react'
import { Typography, TypographyProps } from '@material-ui/core'
import styled, { css } from 'styled-components'

const defaultCss = css`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.1rem;
  margin: 0;
  padding: 0;
`

const DefaultText = styled(({ ...props }) => <Typography {...props} component='p' />)`
  ${defaultCss};
`

const Bold = styled(DefaultText)`
  font-weight: bold;
`
const variants = {
  bold: Bold,
}

type Variant = keyof typeof variants

interface Props {
  variant: Variant
}

const TextFactory: FC<Props> = ({ variant, ...props }) => {
  const Text = variants[variant]
  return <Text {...props} />
}

class Text extends Component {
  // @ts-ignore
  static Bold: FC<Props & TypographyProps & object> = ({ variant = 'bold', ...props}) => <TextFactory {...props} variant={variant} />
  
  render() {
    return (
      <DefaultText {...this.props} />
    )
  }
}

export default Text
