import { ReactNode, createContext, useContext, useReducer } from "react";

interface InitialStateType {
    input: string;
  }

  
interface MyContextType {
    state: InitialStateType
    dispatch: React.Dispatch<ActionType>
}

const initialState = {
    input: ''
  }
  
type ActionType = {
    type: string
}


 const MyContext = createContext<MyContextType | undefined>(undefined);

  function reducer(state: InitialStateType, action: ActionType) {
    switch(action.type){
      case 'Button':
        return { ...state, input : 'Button'};
      case 'Radio':
        return { ...state, input : 'Radio' };
      case 'Checkbox':
        return { ...state, input : 'Checkbox'};
      case 'Text':
        return { ...state, input: 'Text' };
      default:
        return state 
    }
  }

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
  };
  
  export default MyContext;