import { ButtonVariant } from "@common/components/Button/types";
import { primaryButtonCss, secondaryButtonCss } from "../styled";

export const getButtonStyle = (variant?: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return primaryButtonCss;

    case "secondary":
      return secondaryButtonCss;
    default:
      return undefined;
  }
};
