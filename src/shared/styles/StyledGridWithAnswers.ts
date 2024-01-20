import styled from "styled-components";

export const StyledGridWithAnswers = styled.div`
    min-width: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media screen and (max-width: 720px){
        min-width: 100%;
        grid-template-columns: 1fr;
        gap: 15px;
    }
`