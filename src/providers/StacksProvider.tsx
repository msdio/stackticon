import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface StackContextType {
  stacks: string[];
  update: (s: string[]) => void;
}

const StackContext = createContext<StackContextType | null>(null);

interface StacksProviderProps {
  children: ReactNode;
}
const StacksProvider = ({ children }: StacksProviderProps) => {
  const [stacks, setStacks] = useState<string[]>([]);

  const update = (stack: string[]) => {
    setStacks([...stack]);
  };

  return <StackContext.Provider value={{ stacks, update }}>{children}</StackContext.Provider>;
};

export const useStacks = () => {
  return useContext(StackContext) as StackContextType;
};

export default StacksProvider;
