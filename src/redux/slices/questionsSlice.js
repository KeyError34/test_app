import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Что такое React?',
      options: [
        'Библиотека для создания пользовательских интерфейсов',
        'Фреймворк для работы с серверами',
      ],
      correctAnswer: 'Библиотека для создания пользовательских интерфейсов',
      selectedAnswer: null,
    },
    {
      id: 2,
      text: 'Что такое JSX?',
      options: [
        'Синтаксический сахар для JavaScript',
        'Язык разметки для написания компонентов React',
      ],
      correctAnswer: 'Язык разметки для написания компонентов React',
      selectedAnswer: null,
    },
    {
      id: 3,
      text: 'Для чего используется useState?',
      options: [
        'Для добавления стилей',
        'Для работы с состоянием в функциональных компонентах',
      ],
      correctAnswer: 'Для работы с состоянием в функциональных компонентах',
      selectedAnswer: null,
    },
    {
      id: 4,
      text: 'Что такое Virtual DOM в React?',
      options: [
        'Копия реального DOM для повышения производительности',
        'Библиотека для работы с сервером',
      ],
      correctAnswer: 'Копия реального DOM для повышения производительности',
      selectedAnswer: null,
    },
    {
      id: 5,
      text: 'Для чего используется useEffect?',
      options: [
        'Для работы с побочными эффектами в компонентах',
        'Для добавления событий клика',
      ],
      correctAnswer: 'Для работы с побочными эффектами в компонентах',
      selectedAnswer: null,
    },
    {
      id: 6,
      text: 'Чем отличается функциональный компонент от классового?',
      options: [
        'Функциональные компоненты — это JavaScript функции, а классовые используют синтаксис классов',
        'Функциональные компоненты поддерживают state, а классовые — нет',
      ],
      correctAnswer:
        'Функциональные компоненты — это JavaScript функции, а классовые используют синтаксис классов',
      selectedAnswer: null,
    },
    {
      id: 7,
      text: 'Что такое props в React?',
      options: [
        'Это состояние компонента',
        'Это объект, который передает данные от родительского компонента к дочернему',
      ],
      correctAnswer:
        'Это объект, который передает данные от родительского компонента к дочернему',
      selectedAnswer: null,
    },
    {
      id: 8,
      text: 'Как правильно использовать useEffect с зависимостями?',
      options: [
        'Передавать массив зависимостей в качестве второго аргумента',
        'Передавать функции в массив зависимостей',
      ],
      correctAnswer:
        'Передавать массив зависимостей в качестве второго аргумента',
      selectedAnswer: null,
    },
    {
      id: 9,
      text: 'Что делает метод setState в классовых компонентах?',
      options: [
        'Обновляет состояние компонента',
        'Обновляет разметку страницы',
      ],
      correctAnswer: 'Обновляет состояние компонента',
      selectedAnswer: null,
    },
    {
      id: 10,
      text: 'Чем отличается useMemo от useCallback?',
      options: [
        'useMemo возвращает мемоизированное значение, а useCallback — мемоизированную функцию',
        'Оба возвращают мемоизированные значения',
      ],
      correctAnswer:
        'useMemo возвращает мемоизированное значение, а useCallback — мемоизированную функцию',
      selectedAnswer: null,
    },
    {
      id: 11,
      text: 'Что такое Context API?',
      options: [
        'Способ передавать данные через дерево компонентов без использования props',
        'Фреймворк для управления состоянием',
      ],
      correctAnswer:
        'Способ передавать данные через дерево компонентов без использования props',
      selectedAnswer: null,
    },
    {
      id: 12,
      text: 'Что такое HOC (Higher-Order Component)?',
      options: [
        'Компонент, который оборачивает другой компонент для расширения его функционала',
        'Специальный тип компонента для работы с состоянием',
      ],
      correctAnswer:
        'Компонент, который оборачивает другой компонент для расширения его функционала',
      selectedAnswer: null,
    },
    {
      id: 13,
      text: 'Как в React создаются элементы без использования JSX?',
      options: [
        'С помощью функции React.createElement()',
        'С помощью функции useElement()',
      ],
      correctAnswer: 'С помощью функции React.createElement()',
      selectedAnswer: null,
    },
    {
      id: 14,
      text: 'Что такое ключи (keys) в списках React?',
      options: [
        'Уникальные идентификаторы для элементов списка, чтобы React мог правильно обновлять и удалять элементы',
        'Уникальные идентификаторы для работы с состоянием',
      ],
      correctAnswer:
        'Уникальные идентификаторы для элементов списка, чтобы React мог правильно обновлятьи удалять элементы',
      selectedAnswer: null,
    },
    {
      id: 15,
      text: 'Как предотвратить повторное выполнение useEffect?',
      options: [
        'Передавать пустой массив зависимостей',
        'Не использовать useEffect',
      ],
      correctAnswer: 'Передавать пустой массив зависимостей',
      selectedAnswer: null,
    },
    {
      id: 16,
      text: 'Чем отличается useRef от useState?',
      options: [
        'useRef сохраняет значение между рендерами, но не вызывает повторный рендер при изменении',
        'Оба используются для работы с состоянием',
      ],
      correctAnswer:
        'useRef сохраняет значение между рендерами, но не вызывает повторный рендер при изменении',
      selectedAnswer: null,
    },
    {
      id: 17,
      text: 'Что такое React Fragment?',
      options: [
        'Компонент, который можно использовать для группировки дочерних элементов без добавления дополнительных узлов в DOM',
        'Компонент для работы с ошибками',
      ],
      correctAnswer:
        'Компонент, который можно использовать для группировки дочерних элементов без добавления дополнительных узлов в DOM',
      selectedAnswer: null,
    },
    {
      id: 18,
      text: 'Что такое чистые компоненты (Pure Components)?',
      options: [
        'Компоненты, которые перерендериваются только при изменении пропсов или состояния',
        'Компоненты, которые не используют состояние',
      ],
      correctAnswer:
        'Компоненты, которые перерендериваются только при изменении пропсов или состояния',
      selectedAnswer: null,
    },
    {
      id: 19,
      text: 'Как работает Lazy Loading компонентов?',
      options: [
        'Компоненты загружаются только тогда, когда они действительно нужны (при рендеринге)',
        'Компоненты загружаются все сразу при запуске приложения',
      ],
      correctAnswer:
        'Компоненты загружаются только тогда, когда они действительно нужны (при рендеринге)',
      selectedAnswer: null,
    },
    {
      id: 20,
      text: 'Что такое useReducer?',
      options: [
        'Хук, который используется для управления более сложным состоянием через редюсеры',
        'Хук для работы с запросами на сервер',
      ],
      correctAnswer:
        'Хук, который используется для управления более сложным состоянием через редюсеры',
      selectedAnswer: null,
    },
  ],
  correctCount: 0,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.selectedAnswer = answer;
        if (answer === question.correctAnswer) {
          state.correctCount += 1;
        }
      }
    },
    resetAnswers: state => {
      state.questions.forEach(q => (q.selectedAnswer = null));
      state.correctCount = 0;
    },
  },
});

export const { answerQuestion, resetAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;