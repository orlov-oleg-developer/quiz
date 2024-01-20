import { useAppDispatch } from '@/app/providers/StoreProvider/config/store';
import { dataActions } from '@/entities/Data/model/slice/dataSlice';
import { Difficulty, DifficultyDictionary } from '@/entities/Data/model/types/dataSchema';
import { getUserInfo } from '@/entities/User/model/selectors/getUserInfo';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { StyledAnswer } from '@/shared/styles/StyledAnswer';
import { StyledContainer } from '@/shared/styles/StyledContainer';
import { StyledGridWithAnswers } from '@/shared/styles/StyledGridWithAnswers';
import { StyledQuestionCard } from '@/shared/styles/StyledQuestionCard';
import SubTitle from '@/shared/ui/SubTitle/SubTitle';
import Title from '@/shared/ui/Title/Title';
import Text from '@/shared/ui/Text/Text';
import { Fragment, useCallback } from 'react';
import { batch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RadioButton from '@/shared/ui/RadioButton/RadioButton';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';
import Button from '@/shared/ui/Button/Button';

export const StyledDiv = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

function ResultPage() {
    const dispatch = useAppDispatch()
    const { result, totalScore } = useSelector(getUserInfo)

    const onRestart = useCallback(() => {
        batch(() => {
            dispatch(dataActions.resetData())
            dispatch(userActions.resetResult())
        })
    }, [dispatch])

    return (
        <StyledContainer>
            <Title>Результаты</Title>

            <StyledQuestionCard>
                <SubTitle data-testid={'totalScore'}>{`Количество правильных ответов: ${totalScore}`}</SubTitle>
            </StyledQuestionCard>

            {Object.keys(result).map((key, i) => (
                <Fragment key={i}>
                    <SubTitle>{`Сложность: ${DifficultyDictionary[key as Difficulty]}`}</SubTitle>
                    {Object.values(result[key as Difficulty]).map(question => (
                        <StyledQuestionCard key={question.id}>
                            <SubTitle align={'center'}>{question.question}</SubTitle>
                            <StyledGridWithAnswers>
                                {question.answers.map((answer) => (
                                    <StyledAnswer key={answer.id}>
                                        <Text>{answer.text}</Text>
                                        {question.type === 'boolean'
                                            ? <RadioButton status={answer.status} defaultChecked={false} />
                                            : <Checkbox status={answer.status} defaultChecked={false} />
                                        }
                                    </StyledAnswer>
                                ))}
                            </StyledGridWithAnswers>
                        </StyledQuestionCard>
                    ))}
                </Fragment>
            ))}

            <Button data-testid={'resetartQuiz'} onClick={onRestart}>Начать заново</Button>
        </StyledContainer>
    )
}
export default ResultPage;


