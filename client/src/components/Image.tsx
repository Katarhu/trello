import styled from "styled-components";

import React from "react";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  draggable?: boolean;
}

export function Image({ src, draggable = false }: ImageProps) {
  return <AppImage src={src} alt="Trello logo image" draggable={draggable} />;
}

const AppImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
