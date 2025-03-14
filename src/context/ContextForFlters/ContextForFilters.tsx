import { createContext, useReducer, useContext } from "react";
import { optionAll } from "../../data/selectOptions/selectOptions";
import * as React from "react";

interface Action {
  type: "change";
  event: string | number;
}

interface Option {
  value: string | number;
  label: string;
}

interface FiltersProviderProps {
  children: React.ReactNode;
}

const ContextOptionAll = createContext<Option[]>([]);
const ContextChangeDispath = createContext<React.Dispatch<Action>>(() => {});

export const ContextOptionGenres = createContext(optionAll.slice(0, 4));
export const ContextOptionsYears = createContext(optionAll.slice(4, 8));

export const FiltersProvider: React.FC<FiltersProviderProps> = ({
  children,
}) => {
  const [optionsSelect, dispatch] = useReducer(yourReducer, optionAll);

  return (
    <>
      <ContextOptionAll.Provider value={optionsSelect}>
        {children}
      </ContextOptionAll.Provider>{" "}
      <ContextChangeDispath.Provider value={dispatch}>
        {children}
      </ContextChangeDispath.Provider>
    </>
  );
};

export const useOptionAll = () => {
  return useContext(ContextOptionAll);
};

export const useChangeDispatch = () => {
  return useContext(ContextChangeDispath);
};


const yourReducer = (optionAll: Option[], action: Action) => {
  switch (action.type) {
    case "change": {
      const selectedValue = action.event;
      const selectedOption = optionAll.find(
        (option) => option.value === selectedValue
      );
      return selectedOption ? [selectedOption] : optionAll;
    }
    default:
      return optionAll;
  }
};
