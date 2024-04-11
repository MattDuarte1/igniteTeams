import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIcon extends TouchableOpacityProps {
  type?: ButtonIconTypeProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const ButtonIcon = ({ type = "primary", icon, ...rest }: ButtonIcon) => {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
};
