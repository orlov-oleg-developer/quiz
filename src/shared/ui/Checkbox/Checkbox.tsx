import React, { InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components'

const StyledCheckbox = styled.input`
    color: ${props => props.color || 'black'};
`

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Checkbox = memo((props: CheckboxProps) => {
    return <StyledCheckbox type='checkbox' {...props} />
})
Checkbox.displayName = 'Checkbox'

export default Checkbox;
