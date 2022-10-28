import { CustomText } from "components/Text";

type TextContainerProps = {
  title?: string;
  content?: string;
};

const DEFAULT_CONTENT =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout";

export const TextContainer = ({
  title,
  content = DEFAULT_CONTENT,
}: TextContainerProps) => {
  return (
    <>
      {title && <CustomText variant="h2">{title}</CustomText>}
      <CustomText variant="paragraph">{content}</CustomText>
    </>
  );
};
