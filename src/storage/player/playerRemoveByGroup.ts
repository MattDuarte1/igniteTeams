import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@/utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    const filteredPlayers = await storage.filter(
      (player) => player.name !== playerName
    );

    const players = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {}
}
