/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { AnswerStatus } from '@/entities/User/model/types/userSchema';
import { InputHTMLAttributes, memo } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
`

const RadioButtonLabel = styled.label<RadioButtonProps>`
  position: absolute;
  top: 15%;
  left: 4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;

  ${props => (props.status === 'OK') && css`
    border: none;
    outline: 3px solid green;
  `};
  ${props => props.status === 'Error' && css`
    border: none;
    outline: 3px solid red;
  `};
`;

const StyledRadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  /* &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  } */
  ${(props) =>
    props.checked && ` 
    &:checked + ${RadioButtonLabel} {
      background-color: black;
      border: none;

      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        transform: translate(6px, 6px);
        background: white;
      }
    }
  `}
`;

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: () => void
  status?: AnswerStatus
  "data-testid"?: string
}

const RadioButton = memo((props: RadioButtonProps) => {
  return (
    <Container data-testid={props["data-testid"]} onClick={props.onChange}>
      <StyledRadioButton type='radio' name="radio" {...props} data-testid={""} />
      <RadioButtonLabel status={props.status} />
    </Container>
  )
})
RadioButton.displayName = 'RadioButton'

export default RadioButton;
