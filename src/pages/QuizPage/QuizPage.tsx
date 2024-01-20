import { useAppDispatch } from '@/app/providers/StoreProvider/config/store';
import { getData } from '@/entities/Data/model/selectors/getData';
import { getLastIndexOfQuestions } from '@/entities/Data/model/selectors/getLastIndexOfQuestions';
import { getQuizData } from '@/entities/Data/model/services/getQuizData';
import { dataActions } from '@/entities/Data/model/slice/dataSlice';
import { getUserInfo } from '@/entities/User/model/selectors/getUserInfo';
import { userActions } from '@/entities/User/model/slice/userSlice';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';
import Title from '@/shared/ui/Title/Title';
import Text from '@/shared/ui/Text/Text';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SubTitle from '@/shared/ui/SubTitle/SubTitle';
import Button from '@/shared/ui/Button/Button';
import RadioButton from '@/shared/ui/RadioButton/RadioButton';
import { StyledContainer } from '@/shared/styles/StyledContainer';
import { StyledGridWithAnswers } from '@/shared/styles/StyledGridWithAnswers';
import { StyledAnswer } from '@/shared/styles/StyledAnswer';
import { StyledQuestionCard } from '@/shared/styles/StyledQuestionCard';

const StyledCardHeader = styled.div`
    padding: 10px 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
    align-items: center;
`

const StyledArrowButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`
function QuizPage() {
    const dispatch = useAppDispatch()

    const data = useSelector(getData)
    const { currentQuestion } = useSelector(getUserInfo)
    const lastIndexOfQuestions = useSelector(getLastIndexOfQuestions)

    useEffect(() => {
        dispatch(getQuizData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onQuestionChange = useCallback((status: 'next' | 'last') => {
        dispatch(userActions.changeCurrentQuestion(currentQuestion + (status === 'next' ? 1 : -1)))
    }, [currentQuestion, dispatch])

    const onFinish = useCallback(() => {
        dispatch(userActions.setResult(data))
    }, [data, dispatch])

    const onCheck = useCallback((id: string) => {
        dispatch(dataActions.checkAnswer({ id, questionIndex: currentQuestion, type: data[currentQuestion].type }))
    }, [currentQuestion, data, dispatch])

    if (!data) return <div>Данные загружаются...</div>

    return (
        <StyledContainer>
            <Title>Опросник</Title>

            <StyledQuestionCard>
                <StyledCardHeader>
                    <Text>{`${currentQuestion + 1}/${lastIndexOfQuestions + 1}`}</Text>
                    {currentQuestion !== 0 && <StyledArrowButton title={'Предыдущий вопрос'} onClick={() => onQuestionChange('last')}>←</StyledArrowButton>}
                </StyledCardHeader>
                <SubTitle align={'center'}>{data[currentQuestion].question}</SubTitle>
                <StyledGridWithAnswers>
                    {data[currentQuestion].answers.map((answer) => (
                        <StyledAnswer key={answer.id}>
                            <Text>{answer.text}</Text>
                            {data[currentQuestion].type === 'boolean'
                                ? <RadioButton checked={answer.isChecked} onChange={() => onCheck(answer.id)} />
                                : <Checkbox checked={answer.isChecked} onChange={() => onCheck(answer.id)} />
                            }
                        </StyledAnswer>
                    ))}
                </StyledGridWithAnswers>
                <div>
                    {currentQuestion < lastIndexOfQuestions
                        ? <Button onClick={() => onQuestionChange('next')}>Следующий вопрос</Button>
                        : <Button onClick={onFinish}>Завершить тест</Button>
                    }

                </div>
            </StyledQuestionCard>
        </StyledContainer>
    )
}
export default QuizPage;


