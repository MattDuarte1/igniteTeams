import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@/utils/AppError";

export async function groupCreate(newGroupName: string) {
  try {
    const storagedGroups = await groupsGetAll();
    const groupAlreadyExists = storagedGroups.includes(newGroupName);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome");
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storagedGroups, newGroupName])
    );
  } catch (error) {
    throw error;
  }
}
