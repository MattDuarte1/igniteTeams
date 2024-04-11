import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonTypeStyleProps;
  title: string;
}

export const Button = ({ type = "primary", title, ...rest }: ButtonProps) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
