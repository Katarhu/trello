import { ReactNode } from "react";

export interface IFlexBoxProps {
  flex?: boolean;
  column?: boolean;
  gap?: string;
  wrap?: boolean;

  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "normal";

  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
    | "normal";
}

export interface ISizableProps {
  width?: string;
  maxWidth?: string;
  height?: string;

  maxHeight?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export interface IWithChildrenProps {
  children: ReactNode;
}

export interface ITextProps {
  fontSize?: string;
  bold?: boolean;
  fontWeight?: 300 | 400 | 500;
  lineHeight?: number;
  center?: boolean;
  end?: boolean;
}
