import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './slices/questionsSlice';

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
