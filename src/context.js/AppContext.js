import { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};
const initialState = {
  budget: 1000,
  expenses: [
    { id: 3, name: "Shopping", cost: 50 },
    { id: 33, name: "Holiday", cost: 300 },
    { id: 67, name: "Transportation", cost: 70 },
  ],
};
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
