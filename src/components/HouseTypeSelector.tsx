import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { HouseRowHome } from "@/src/icons";
import { getHouseTypes } from "@/src/services/houseTypes.service";
import { HouseType, HouseTypeId, SelectorProps } from "@/src/types/globalTypes";
import { HOUSE_ICON_MAP } from "../constants";

export default function HouseTypeSelector({
  value,
  onChange,
}: SelectorProps<HouseTypeId>) {
  const [houseTypes, setHouseTypes] = useState<HouseType[]>([]);

  useEffect(() => {
    const onLoad = async () => {
      let types = await getHouseTypes();
      (types as { id: HouseTypeId; icon?: React.ReactNode }[]).forEach(
        (type) => {
          type.icon = HOUSE_ICON_MAP[type.id as HouseTypeId] ?? (
            <HouseRowHome />
          );
        },
      );
      setHouseTypes(types as HouseType[]);
    };
    onLoad();
  }, []);

  return (
    <View style={styles.container}>
      {houseTypes.map((type) => (
        <Pressable
          key={type.id}
          onPress={() => onChange(type.id)}
          style={[styles.button, value === type.id && styles.selected]}
          accessibilityRole="button"
          accessibilityLabel={type.id}
          accessibilityState={{ selected: value === type.id }}
        >
          {type.icon}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderColor: "#2563eb",
    backgroundColor: "#eff6ff",
  },
});
