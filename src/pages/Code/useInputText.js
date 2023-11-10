import { useContext } from 'react';
import { CodeContext } from './Code';

export const useResponse = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error('useResponse must be used within a CodeProvider');
  }
  return context;
};