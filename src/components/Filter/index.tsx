import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface FilterProps extends TouchableOpacityProps {
  isActive?: boolean;
  title: string;
}

export const Filter = ({ title, isActive = false, ...rest }: FilterProps) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
