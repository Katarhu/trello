import { IWithChildrenProps } from "@types";
import { createRef } from "react";
import { useEventListener } from "@hooks";
import styled, { css } from "styled-components";

interface ParallaxItemProps extends IWithChildrenProps {
  acceleratingValue?: number;
  center?: boolean;
}

export const ParallaxItem = ({
  children,
  acceleratingValue = 40,
  center,
}: ParallaxItemProps) => {
  const containerItemRef = createRef<HTMLDivElement>();

  useEventListener(
    "mousemove",
    (event) => {
      const x = event.clientX / acceleratingValue;
      const y = event.clientY / acceleratingValue;

      if (containerItemRef.current)
        containerItemRef.current.style.transform = `translate(${x}px, ${y}px)`;
    },
    containerItemRef
  );

  return (
    <ParallaxItemStyled ref={containerItemRef} center={center}>
      {children}
    </ParallaxItemStyled>
  );
};

const centeredItem = css`
  display: grid;
  place-items: center;
`;

const ParallaxItemStyled = styled.div<Pick<ParallaxItemProps, "center">>`
  ${({ center }) => (center ? centeredItem : undefined)};

  transform: translate(0px, 0px);
`;
