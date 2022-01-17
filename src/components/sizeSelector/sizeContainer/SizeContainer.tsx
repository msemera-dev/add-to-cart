import { Box } from "@material-ui/core";
import { FunctionComponent } from "react";

export interface ISizeSelectorProps {
  boxClass: string;
  content: string;
  onClick: (value: string) => void;
}

const SizeContainer: FunctionComponent<ISizeSelectorProps> = ({ boxClass, content, onClick }) => {
  return (
    <Box className={boxClass} onClick={() => onClick(content)}>
      <span>{content}</span>
    </Box>
  )
}

export default SizeContainer;