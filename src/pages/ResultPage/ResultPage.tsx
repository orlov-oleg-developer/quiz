import { useAppDispatch } from '@/app/providers/StoreProvider/config/store';
import { dataActions } from '@/entities/Data/model/slice/dataSlice';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { useCallback } from 'react';
import { batch } from 'react-redux';
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

function ResultPage() {
    const dispatch = useAppDispatch()

    const onRestart = useCallback(() => {
        batch(() => {
            dispatch(dataActions.resetData())
            dispatch(userActions.resetResult())
        })
    }, [])

    return (
        <div>
            <button onClick={onRestart}>Начать заново</button>
        </div>
    )
}
export default ResultPage;


