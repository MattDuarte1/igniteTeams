import { Button } from "@/components/Button";
import { Container, Content, Icon } from "./styles";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/HighLight";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@/storage/group/groupCreate";
import { AppError } from "@/utils/AppError";
import { Alert } from "react-native";

export const NewGroup = () => {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma");
      }

      await groupCreate(group);
      navigation.navigate("players", {
        group,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo");
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Header showBackButton={true} />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={(e) => setGroup(e)}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
};
