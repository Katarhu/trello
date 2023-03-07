import styled from "styled-components";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiErrorCircle } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";

interface ErrorTooltipProps {
  errors?: string[] | null;
  touched?: boolean;
}

export const ErrorTooltip = ({ errors, touched }: ErrorTooltipProps) => {
  const id = useId();

  const errorItems =
    errors &&
    touched &&
    errors.map((error) => (
      <ErrorItem key={error}>
        <ErrorItemIcon /> {error}
      </ErrorItem>
    ));

  return (
    <AnimatePresence>
      {errors && touched && errors.length ? (
        <TooltipContainer
          role="tooltip"
          key="biba"
          initial={{ y: "-35%", opacity: 0, scale: 0.5 }}
          animate={{ y: "-50%", opacity: 1, scale: 1 }}
          exit={{ y: "-35%", opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ErrorIcon id={id} />
          <ErrorsContainer className="errorContainer">
            <ErrorsList>{errorItems}</ErrorsList>
          </ErrorsContainer>
        </TooltipContainer>
      ) : null}
    </AnimatePresence>
  );
};

const TooltipContainer = styled(motion.section)`
  width: fit-content;
  position: absolute;
  right: 0;
  top: 50%;

  transform: translateY(-50%);

  cursor: help;

  padding: var(--errorContainerPadding);

  &:hover .errorContainer {
    display: block;
  }
`;

const ErrorIcon = styled(BiErrorCircle)<{ id: string }>`
  font-size: var(--errorFontSize, 1em);
  color: ${({ theme }) => theme["red-700"]};
`;

const ErrorsContainer = styled.section`
  display: none;
  position: absolute;
  min-width: 250px;
  max-width: 300px;
  top: 0;

  transform: translate(calc(-100% + var(--errorFontSize) / 2), calc(-95%));
  border: 1px solid ${({ theme }) => theme["gray-700"]};

  background: ${({ theme }) => theme.white};
  border-radius: var(--borderRadius-300) var(--borderRadius-300) 0
    var(--borderRadius-300);
  padding: 1.25em 1em;
`;

const ErrorsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const ErrorItem = styled.li`
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 0.25em;
  line-height: 120%;
`;

const ErrorItemIcon = styled(RiErrorWarningLine)`
  align-self: flex-start;
  flex-shrink: 0;
  color: ${({ theme }) => theme["red-700"]};
  padding-top: 0.1em;
`;
