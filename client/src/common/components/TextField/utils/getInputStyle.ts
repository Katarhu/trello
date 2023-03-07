import { InputVariants } from "@common/components/TextField/types";
import {
  filledContainerCss,
  outlinedContainerCss,
} from "@common/components/TextField/styled";

export const getInputStyle = (variant: InputVariants) => {
  switch (variant) {
    case "filled":
      return filledContainerCss;

    case "outlined":
      return outlinedContainerCss;
    default:
      return undefined;
  }
};
