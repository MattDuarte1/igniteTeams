import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@/utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storagedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storagedPlayers.find(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui");
    }

    const storage = JSON.stringify([...storagedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
