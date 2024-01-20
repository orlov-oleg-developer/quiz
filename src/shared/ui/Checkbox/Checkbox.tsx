/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { AnswerStatus } from '@/entities/User/model/types/userSchema';
import React, { InputHTMLAttributes, memo } from 'react';
import styled, { css } from 'styled-components'

const Styled = styled.div<CheckboxProps>`
  display: flex;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; 
    padding-left: 25px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 18px; height: 18px; /* dim. de la case */
      border: none;
      border-radius: 4px;
      background: #f8f8f8;
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3); /* légère ombre interne */

      ${props => (props.status === 'Error') && css`
        border: 3px solid red;
      `}
      ${props => (props.status === 'OK') && css`
        border: 3px solid green;
      `}
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #0E0E0E;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: () => void
  status?: AnswerStatus
  "data-testid"?: string
}

const Checkbox = memo((props: CheckboxProps) => {
  return (
    <Styled data-testid={props["data-testid"]} onClick={props.onChange} status={props.status}>
      <input type='checkbox' {...props} data-testid={""} />
      <label>{''}</label>
    </Styled>
  )
})
Checkbox.displayName = 'Checkbox'

export default Checkbox;
