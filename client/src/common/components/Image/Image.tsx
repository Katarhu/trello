import styled from "styled-components";
import { DefaultImgAttributes, ISizableProps } from "@types";
import { memo } from "react";
import { sizableCss } from "@common/styles/styled.styles";

interface ImageProps extends DefaultImgAttributes, ISizableProps {
  src: string;
  draggable?: boolean;
  contain?: boolean;
}

export const Image = memo(({ src, width, maxWidth, ...props }: ImageProps) => {
  return (
    <ImageContainer width={width} maxWidth={maxWidth}>
      <AppImage src={src} alt="Trello logo image" {...props} />
    </ImageContainer>
  );
});

Image.displayName = "Image";

const ImageContainer = styled.div<ISizableProps>`
  ${sizableCss}
`;

const AppImage = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ contain }) => (contain ? "contain" : "cover")};
`;
