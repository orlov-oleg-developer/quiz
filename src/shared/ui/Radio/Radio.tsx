import React, { InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components'

const StyledRadio = styled.input`
    color: ${props => props.color || 'black'};
`

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Radio = memo((props: RadioInputProps) => {
    return <StyledRadio type='radio' {...props} />
})
Radio.displayName = 'Radio'

export default Radio;
