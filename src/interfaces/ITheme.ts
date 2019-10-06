export interface ITheme {
  [x: string]: any;
  name: string;
  colors: {
    primary: string;
    secondary: string;  
  };
  font: string;
}
