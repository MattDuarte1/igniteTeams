import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeProps = "primary" | "secondary";

interface IconProps {
  type: ButtonIconTypeProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
