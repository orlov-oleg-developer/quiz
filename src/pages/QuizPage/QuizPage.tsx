import { useAppDispatch } from '@/app/providers/StoreProvider/config/store';
import { getData } from '@/entities/Data/model/selectors/getData';
import { getLastIndexOfQuestions } from '@/entities/Data/model/selectors/getLastIndexOfQuestions';
import { getQuizData } from '@/entities/Data/model/services/getQuizData';
import { dataActions } from '@/entities/Data/model/slice/dataSlice';
import { getUserInfo } from '@/entities/User/model/selectors/getUserInfo';
import { userActions } from '@/entities/User/model/slice/userSlice';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export const StyledDiv = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

function QuizPage() {
    const dispatch = useAppDispatch()

    const data = useSelector(getData)
    const { currentQuestion } = useSelector(getUserInfo)
    const lastIndexOfQuestions = useSelector(getLastIndexOfQuestions)

    useEffect(() => {
        dispatch(getQuizData());
    }, []);

    const onQuestionChange = useCallback((status: 'next' | 'last') => {
        dispatch(userActions.changeCurrentQuestion(currentQuestion + (status === 'next' ? 1 : -1)))
    }, [currentQuestion])

    const onFinish = useCallback(() => {
        dispatch(userActions.setResult(data))
    }, [data])

    const onCheck = useCallback((id: string) => {
        dispatch(dataActions.checkAnswer({ id, questionIndex: currentQuestion }))
    }, [currentQuestion])

    if (!data) return <div>Данные грузятся</div>

    return (
        <div>
            <Title>Quiz</Title>
            <br />

            <Title>{data[currentQuestion].question}</Title>
            {data[currentQuestion].answers.map((answer) => (
                <StyledDiv key={answer.id}>
                    <p>{answer.text}</p>
                    {/* <Radio checked={answer.isChecked} onChange={(e) => onCheck(answer.id)} /> */}
                    <Checkbox checked={answer.isChecked} onChange={(e) => onCheck(answer.id)} />
                </StyledDiv>
            ))}
            <div>
                {currentQuestion < lastIndexOfQuestions
                    ? <button onClick={() => onQuestionChange('next')}>Следующий вопрос</button>
                    : <button onClick={onFinish}>Завершить тест</button>
                }
                {currentQuestion !== 0 && <button onClick={() => onQuestionChange('last')}>Предыдущий вопрос</button>}
            </div>
        </div>
    )
}
export default QuizPage;


