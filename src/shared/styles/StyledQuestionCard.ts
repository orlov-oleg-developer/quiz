import styled from "styled-components";

export const StyledQuestionCard = styled.div`
    padding: 30px;
    width: 650px;
    background-color: ${props => props.theme.colors.block};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 720px){
        width: 100%;
    }
`