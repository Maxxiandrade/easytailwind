import { ReactNode, createContext, useContext, useReducer } from "react";

interface InitialStateType {
    input: string;
    textColor: string;
    textIntensity: string;
    backgroundColor: string;
    backgroundIntensity: string;
    rounded:string;
  }

  
interface MyContextType {
    state: InitialStateType
    dispatch: React.Dispatch<ActionType>
}

const initialState = {
    input: '',
    textColor: '',
    textIntensity: '',
    backgroundColor:'',
    backgroundIntensity:'',
    rounded:''
  }
  
type ActionType = { type: string, payload: string }


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
      case 'textColor':
        return { ...state, textColor: action.payload}
      case 'textIntensity':
        return { ...state, textIntensity: action.payload}
      case 'backgroundColor':
        return { ...state, backgroundColor: action.payload}
      case 'backgroundIntensity':
        return { ...state, backgroundIntensity: action.payload}
      case 'rounded':
        return { ...state, rounded: action.payload}
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