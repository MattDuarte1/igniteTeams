import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}

export const Input = ({ inputRef, ...rest }: InputProps) => {
  return <Container ref={inputRef} {...rest} />;
};
