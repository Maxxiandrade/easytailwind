import { ReactNode, createContext, useContext, useReducer } from "react";

interface InitialStateType {
    input: string;
    textColor: string;
    textIntensity: string;
    backgroundColor: string;
    backgroundIntensity: string;
    rounded:string;
    border:string;
    borderColor:string;
    borderIntensity:string;
    w:string;
    h:string;
    scale:string;
    duration:string;
    hover:string
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
    rounded:'',
    border:'',
    borderColor:'',
    borderIntensity:'',
    w:'',
    h:'',
    scale:'',
    duration:'',
    hover:''
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
      case 'border':
        if(action.payload === 'no'){
          return { ...state, border: ''}
        }
        if(action.payload === 'yes'){
          return { ...state, border: 'border'}
        }
        return { ...state}
      case 'borderColor':
        return { ...state, borderColor: action.payload }
      case 'borderIntensity':
        return { ...state, borderIntensity: action.payload }
      case 'w':
        return { ...state, w: action.payload}
      case 'h':
        return { ...state, h: action.payload}
      case 'hover':
        return { ...state, hover: 'hover:'}
      case 'scale':
        return { ...state, scale: `scale-${action.payload}`}
      case 'duration':
        return { ...state, duration: `transition ${action.payload}`}
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