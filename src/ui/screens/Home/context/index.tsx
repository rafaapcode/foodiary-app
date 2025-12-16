import { Meal } from '@app/types/Meals';
import { createContext, ReactNode } from 'react';

export interface IHomeContextValue {
  date: Date;
  meals: Meal[];
  previousDay: () => void;
  nextDay: () => void;
  isToday: () => boolean;
}

interface IHomeProviderProps extends IHomeContextValue {
  children: ReactNode;
}

export const HomeContext = createContext({} as IHomeContextValue);

export function HomeProvider({ children, ...ctxValue }: IHomeProviderProps) {
  return (
    <HomeContext.Provider value={ctxValue}>{children}</HomeContext.Provider>
  );
}
