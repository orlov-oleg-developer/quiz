import { useSelector } from 'react-redux';
import { getUserInfo } from '@/entities/User/model/selectors/getUserInfo';
import QuizPage from '@/pages/QuizPage/QuizPage';
import ResultPage from '@/pages/ResultPage/ResultPage';

function App() {
    const { result } = useSelector(getUserInfo)

    return (
        result
            ? <ResultPage />
            : <QuizPage />
    )
}

export default App;
