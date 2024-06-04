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
    duration:string;
    hover:string
    hoverText:string;
    hoverTextIntensity:string;
    hoverBg:string;
    hoverBgIntensity:string;
  }

  
interface MyContextType {
    state: InitialStateType
    dispatch: React.Dispatch<ActionType>
}

const initialState = {
    input: '',
    textColor: 'text-slate-',
    textIntensity: '500',
    backgroundColor:'',
    backgroundIntensity:'',
    rounded:'',
    border:'',
    borderColor:'',
    borderIntensity:'',
    w:'',
    h:'',
    duration:'',
    hover:'',
    hoverText:'',
    hoverTextIntensity:'',
    hoverBg:'',
    hoverBgIntensity:''
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
        return { ...state, textColor: `text-${action.payload}-`}
      case 'textIntensity':
        return { ...state, textIntensity: action.payload}
      case 'backgroundColor':
        if(action.payload === 'none'){ return {...state, backgroundColor: '', backgroundIntensity: ''}}
        return { ...state, backgroundColor: `bg-${action.payload}-`}
      case 'backgroundIntensity':
        return { ...state, backgroundIntensity: action.payload}
      case 'rounded':
        if(action.payload != ''){
        return { ...state, rounded: `rounded-${action.payload}`}
      }else{return{...state, rounded: ''}}
      case 'border':
        if(action.payload === 'no'){
          return { ...state, border: '', borderIntensity:'', borderColor: ''}
        }
        if(action.payload === 'yes'){
          return { ...state, border: 'border'}
        }
        return { ...state}
      case 'borderColor':
        return { ...state, borderColor: `-${action.payload}-` }
      case 'borderIntensity':
        return { ...state, borderIntensity: action.payload }
      case 'w':
        if(action.payload != ''){
        return { ...state, w: `w-${action.payload}`}}
        else{return {...state}}
      case 'h':
        if(action.payload != ''){
        return { ...state, h: `h-${action.payload}`}}
        else{return {...state}}
        case 'hover': {
          if (action.payload === "no") {
            return { ...state, hover: '', scale: '', duration: '', hoverText:'', hoverTextIntensity:'', hoverBg:'', hoverBgIntensity:''}; 
          }
         if(action.payload === '0') { return { ...state, hover: `hover:scale-0`}}
         if(action.payload === '1') { return { ...state, hover: `hover:scale-50`}}
         if(action.payload === '2') { return { ...state, hover: `hover:scale-75`}}
         if(action.payload === '3') { return { ...state, hover: `hover:scale-90`}}
         if(action.payload === '4') { return { ...state, hover: `hover:scale-95`}}
         if(action.payload === '5') { return { ...state, hover: `hover:scale-100`}}
         if(action.payload === '6') { return { ...state, hover: `hover:scale-105`}}
         if(action.payload === '7') { return { ...state, hover: `hover:scale-110`}}
         if(action.payload === '8') { return { ...state, hover: `hover:scale-125`}}
         if(action.payload === '9') { return { ...state, hover: `hover:scale-150`}}
          return state;
        }
      case 'duration':
        if(action.payload === '1') return { ...state, duration: `transition duration-0`} 
        if(action.payload === '2') return { ...state, duration: `transition duration-75`}
        if(action.payload === '3') return { ...state, duration: `transition duration-100`}
        if(action.payload === '4') return { ...state, duration: `transition duration-150`}
        if(action.payload === '5') return { ...state, duration: `transition duration-200`}
        if(action.payload === '6') return { ...state, duration: `transition duration-300`}
        if(action.payload === '7') return { ...state, duration: `transition duration-500`}
        if(action.payload === '8') return { ...state, duration: `transition duration-700`}
        if(action.payload === '9') return { ...state, duration: `transition duration-1000`}
        return { ...state, duration: `transition duration-${action.payload}`}
      case 'hoverText':
        return { ...state, hoverText: `hover:text-${action.payload}-`}
      case 'hoverTextIntensity':
        return { ...state, hoverTextIntensity: action.payload }
      case 'hoverBg':
        return { ...state, hoverBg: `hover:bg-${action.payload}-`}
      case 'hoverBgIntensity':
        return { ...state, hoverBgIntensity: action.payload}
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