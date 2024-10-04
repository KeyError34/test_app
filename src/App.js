import Question from './components/question';
import { resetAnswers } from './redux/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const correctCount = useSelector(state => state.questionnaire.correctCount);
  const totalQuestions = useSelector(
    state => state.questionnaire.questions.length
  );
  
  
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    dispatch(resetAnswers());
    setReset(true); 

  
    setTimeout(() => setReset(false), 0); 
  };

  const handleSubmit = () => {
    alert(`Вы ответили правильно на ${correctCount} из ${totalQuestions} вопросов!`);
  };

  return (
    <div style={{display:'flex', flexDirection:'column', maxWidth:'max-content', gap: '15px', textAlign:'center', margin:'0 auto'}} >
      <h1>Тест react-basic</h1>
      <Question reset={reset} />
      <button className="btnCastom" onClick={handleReset}>
        Начать заново
      </button>
      <button className="btnCastom" onClick={handleSubmit}>
        Отправить ответы
      </button>
    </div>
  );
}

export default App;