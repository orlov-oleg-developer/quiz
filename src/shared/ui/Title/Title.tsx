import styled, { } from 'styled-components'

const StyledTitle = styled.h1`
    color: ${props => props.color || props.theme.colors.text};
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 

    @media screen and (max-width: 720px){
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
    }
`
interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}

const Title = (props: TitleProps) => {
    return <StyledTitle {...props} />
};

export default Title;
