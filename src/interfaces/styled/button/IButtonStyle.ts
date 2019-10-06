import { ITheme } from "../../ITheme";

export interface IButtonProps {
  readonly cta?: boolean;
  readonly secondary?: boolean;
  theme: ITheme;
}
