import styled, { } from 'styled-components'

const StyledText = styled.p`
    color: ${props => props.color || props.theme.colors.text};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    @media screen and (max-width: 720px){
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }
`
interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
}

const Text = (props: TextProps) => {
    return <StyledText {...props} />
};

export default Text;
