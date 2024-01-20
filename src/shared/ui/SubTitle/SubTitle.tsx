import styled, { } from 'styled-components'

export const StyledSubTitle = styled.h2<SubTitleProps>`
    color: ${props => props.color || props.theme.colors.text};
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-align: ${props => props.align || 'start'};

    @media screen and (max-width: 720px){
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
    }
`
interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    align?: 'center' | 'start' | 'end'
}

const SubTitle = (props: SubTitleProps) => {
    return <StyledSubTitle {...props} />
};

export default SubTitle;
