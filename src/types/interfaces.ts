export interface Results {
  results?: any;
  disabled?: boolean|string;
  time?: boolean;
  draft?: boolean;
  user: {
    winner: boolean;
    button: string;
  };
  ai: {
    button: string;
  };
  setInterval?: React.Dispatch<React.SetStateAction<Results>>;
}

export interface Play {
  play?: (id: number) => void;
}
export interface ButtonType extends Play {
  type: string;
  image: string;
  id?: number;
 shadow?:boolean|string;
}
export interface Game{
    start: (id:number)=>void
  }