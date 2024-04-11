import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name } from "./styles";

interface PlayerCardProps {
  name: string;
  onRemove: (playerName: string) => void;
}

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon
        icon="close"
        type="secondary"
        onPress={() => onRemove(name)}
      />
    </Container>
  );
};
