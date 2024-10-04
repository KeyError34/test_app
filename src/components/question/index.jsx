import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { answerQuestion } from '../../redux/slices/questionsSlice';
import styles from './styles.module.scss';

function Question({ reset }) {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questionnaire.questions);
  const correctCount = useSelector(state => state.questionnaire.correctCount);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isLocked, setIsLocked] = useState(false); 

  useEffect(() => {
    if (reset) {
      setSelectedAnswers({});
      setShowResults(false);
      setIsLocked(false);
    }
  }, [reset]);

  const handleAnswer = (questionId, answer) => {
    if (!isLocked) {
      setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
    }
  };

  const handleSubmit = () => {
    questions.forEach(question => {
      const answer = selectedAnswers[question.id];
      if (answer) {
        dispatch(answerQuestion({ questionId: question.id, answer }));
      }
    });
    setShowResults(true);
    setIsLocked(true);
  };

  return (
    <div className={styles.testContainer}>
      {questions.map(question => (
        <div key={question.id} className={styles.questionContainer}>
          <h3 style={{ textAlign: 'center' }}>{question.text}</h3>
          {question.options.map(option => {
            const isSelected = selectedAnswers[question.id] === option;
            const isCorrect = option === question.correctAnswer;
            const isWrong = showResults && isSelected && !isCorrect;

            return (
              <p key={option} style={{ color: isWrong ? 'red' : 'black' }}>
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  onChange={() => handleAnswer(question.id, option)}
                  checked={isSelected}
                  disabled={isLocked}
                />
                {option}
              </p>
            );
          })}
        </div>
      ))}

      <button onClick={handleSubmit}>Проверить ответы</button>

      {showResults && (
        <div className={styles.answerContainer}>
          <h2>Результаты</h2>
          <p>
            Правильных ответов: {correctCount} из {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Question;
