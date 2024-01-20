import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components'

const StyledButton = styled.button<ButtonProps>`
    padding: 10px 28px;
    outline: none;
    border: none;
    border-radius: 30px;

    color: ${props => props.theme.colors.buttonText || 'black'};

    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 2.1px;
    text-transform: uppercase;

    transition: all 0.2s ease-in;

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
        text-decoration: line-through; 
    }

    @media screen and (max-width: 720px){
        padding: 6px 14px;
        font-size: 10px;
    }

    ${props => (props.size === 's') && css`
        padding: 6px 22px;
    `}
    ${props => (props.size === 'm') && css`
        padding: 10px 28px;
    `}
    ${props => (props.size === 'l') && css`
        padding: 14px 28px;
    `}
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: 'm' | 'l' | 's'
}

const Button = ({
    size = 'm',
    ...otherProps
}: ButtonProps) => {
    return <StyledButton size={size} {...otherProps} />
};

export default Button;
