import { DefaultButtonAttributes, IFlexBoxProps, ISizableProps } from "@types";
import { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends DefaultButtonAttributes,
    ISizableProps,
    IFlexBoxProps {
  children: ReactNode;
  onClick?: MouseEventHandler;
  submit?: boolean;
  variant?: ButtonVariant;
}
