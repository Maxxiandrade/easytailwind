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

interface TextStateType {
    align: string;
  }
  
interface ImageStateType{
    rounded: string;
    filter: string;
    hover: string;
    size: string;
    duration: string;
}

interface MyContextType {
    state: InitialStateType
    textState: TextStateType;
    imageState: ImageStateType;
    dispatch: React.Dispatch<ActionType>
    textDispatch: React.Dispatch<TextActionType>;
    imageDispatch: React.Dispatch<ImageActionType>;
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
 
  const textInitialState: TextStateType = {
    align: ''
  };

  const imageInitialState: ImageStateType = {
    rounded: '',
    filter: '',
    hover: '',
    size: '96',
    duration: ''
  }


type ActionType = { type: string, payload: string }
type TextActionType = { type: string; payload: string };
type ImageActionType = { type: string, payload: string}

 const MyContext = createContext<MyContextType | undefined>(undefined);

 function reducer(state: InitialStateType, action: ImageActionType) {
  switch (action.type) {
    case 'Button':
      return { ...state, input: 'Button' };
    case 'Table':
      return { ...state, input: 'Table' };
    case 'Image':
      return { ...state, input: 'Image' };
    case 'Text':
      return { ...state, input: 'Text' };
    case 'textColor':
      return { ...state, textColor: `text-${action.payload}-` };
    case 'textIntensity':
      return { ...state, textIntensity: action.payload || '' };
    case 'backgroundColor':
      return action.payload === 'none'
        ? { ...state, backgroundColor: '', backgroundIntensity: '' }
        : { ...state, backgroundColor: `bg-${action.payload}-` };
    case 'backgroundIntensity':
      return { ...state, backgroundIntensity: action.payload || '' };
    case 'rounded':
      return action.payload !== ''
        ? { ...state, rounded: `rounded-${action.payload}` }
        : { ...state, rounded: '' };
    case 'border':
      switch (action.payload) {
        case 'no':
          return { ...state, border: '', borderIntensity: '', borderColor: '' };
        case 'yes':
          return { ...state, border: 'border' };
        default:
          return state;
      }
    case 'borderColor':
      return { ...state, borderColor: `-${action.payload}-` };
    case 'borderIntensity':
      return { ...state, borderIntensity: action.payload || '' };
    case 'w':
      return action.payload !== '' ? { ...state, w: `w-${action.payload}` } : state;
    case 'h':
      return action.payload !== '' ? { ...state, h: `h-${action.payload}` } : state;
    case 'hover':
      switch (action.payload) {
        case 'no':
          return {
            ...state,
            hover: '',
            scale: '',
            duration: '',
            hoverText: '',
            hoverTextIntensity: '',
            hoverBg: '',
            hoverBgIntensity: ''
          };
        case '0':
          return { ...state, hover: 'hover:scale-0' };
        case '1':
          return { ...state, hover: 'hover:scale-50' };
        case '2':
          return { ...state, hover: 'hover:scale-75' };
        case '3':
          return { ...state, hover: 'hover:scale-90' };
        case '4':
          return { ...state, hover: 'hover:scale-95' };
        case '5':
          return { ...state, hover: 'hover:scale-100' };
        case '6':
          return { ...state, hover: 'hover:scale-105' };
        case '7':
          return { ...state, hover: 'hover:scale-110' };
        case '8':
          return { ...state, hover: 'hover:scale-125' };
        case '9':
          return { ...state, hover: 'hover:scale-150' };
        default:
          return state;
      }
    case 'duration':
      switch (action.payload) {
        case '1':
          return { ...state, duration: 'transition duration-0' };
        case '2':
          return { ...state, duration: 'transition duration-75' };
        case '3':
          return { ...state, duration: 'transition duration-100' };
        case '4':
          return { ...state, duration: 'transition duration-150' };
        case '5':
          return { ...state, duration: 'transition duration-200' };
        case '6':
          return { ...state, duration: 'transition duration-300' };
        case '7':
          return { ...state, duration: 'transition duration-500' };
        case '8':
          return { ...state, duration: 'transition duration-700' };
        case '9':
          return { ...state, duration: 'transition duration-1000' };
        default:
          return { ...state, duration: `transition duration-${action.payload}` };
      }
    case 'hoverText':
      return { ...state, hoverText: `hover:text-${action.payload}-` };
    case 'hoverTextIntensity':
      return { ...state, hoverTextIntensity: action.payload || '' };
    case 'hoverBg':
      return { ...state, hoverBg: `hover:bg-${action.payload}-` };
    case 'hoverBgIntensity':
      return { ...state, hoverBgIntensity: action.payload || '' };
    default:
      return state;
  }
}

const textReducer = (state: TextStateType, action: TextActionType) => {
  switch (action.type) {
    case 'align':
      switch (action.payload) {
        case 'text-left':
          return { ...state, align: '' };
        case 'text-right':
          return { ...state, align: 'text-right' };
        case 'text-center':
          return { ...state, align: 'text-center' };
        case 'text-justify':
          return { ...state, align: 'text-justify' };
        default:
          return state;
      }
    default:
      return state;
  }
};

const imageReducer = (state: ImageStateType, action: ActionType) => {
  switch(action.type){
    case 'rounded':
      return action.payload !== ''
        ? { ...state, rounded: `rounded-${action.payload}` }
        : { ...state, rounded: '' };
        case 'hover':
          switch (action.payload) {
            case 'no':
              return {
                ...state,
                hover: '',
                scale: '',
                duration: '',
              };
            case '0':
              return { ...state, hover: 'hover:scale-0 ' };
            case '1':
              return { ...state, hover: 'hover:scale-50' };
            case '2':
              return { ...state, hover: 'hover:scale-75' };
            case '3':
              return { ...state, hover: 'hover:scale-90' };
            case '4':
              return { ...state, hover: 'hover:scale-95' };
            case '5':
              return { ...state, hover: 'hover:scale-100' };
            case '6':
              return { ...state, hover: 'hover:scale-105' };
            case '7':
              return { ...state, hover: 'hover:scale-110' };
            case '8':
              return { ...state, hover: 'hover:scale-125' };
            case '9':
              return { ...state, hover: 'hover:scale-150' };
            default:
              return state;
          }
        case 'duration':
          switch (action.payload) {
            case '1':
              return { ...state, duration: 'transition duration-0' };
            case '2':
              return { ...state, duration: 'transition duration-75' };
            case '3':
              return { ...state, duration: 'transition duration-100' };
            case '4':
              return { ...state, duration: 'transition duration-150' };
            case '5':
              return { ...state, duration: 'transition duration-200' };
            case '6':
              return { ...state, duration: 'transition duration-300' };
            case '7':
              return { ...state, duration: 'transition duration-500' };
            case '8':
              return { ...state, duration: 'transition duration-700' };
            case '9':
              return { ...state, duration: 'transition duration-1000' };
            default:
              return { ...state, duration: `transition duration-${action.payload}` };
          }
        case 'filter':
          switch(action.payload){
            case('Blur'):
              return { ...state, filter: 'blur'}
            case('Gray Scale'):
              return { ...state, filter: 'grayscale'}
            case('Invert'):
              return { ...state, filter: 'invert'}
            case('Sepia'):
              return { ...state, filter: 'sepia'}
            case('none'):
              return { ...state, filter: ''}
            default: 
              return state
          }
        case 'size':
          switch(action.payload){
            case('0'):
              return { ...state, size: '6'}
            case('1'):
              return { ...state, size:'10'}
            case('2'):
              return { ...state, size:'20'}
            case('3'):
              return { ...state, size:'32'}
            case('4'):
              return { ...state, size:'40'}
            case('5'):
              return { ...state, size:'52'}
            case('6'):
              return { ...state, size:'60'}
            case('7'):
              return { ...state, size:'72'}
            case('8'):
              return { ...state, size:'80'}
            case('9'):
              return { ...state, size:'96'}
            default:
              return state
          }
        default: 
            return state
  }
}

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [textState, textDispatch] = useReducer(textReducer, textInitialState);
  const [imageState, imageDispatch] = useReducer(imageReducer, imageInitialState);
  return (
    <MyContext.Provider value={{ state, textState, imageState, dispatch, textDispatch, imageDispatch }}>
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