import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { HouseApartment, HouseRowHome } from "@/src/icons";
import { getHouseTypes } from "@/src/services/houseTypes.service";

interface HouseTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

type HouseType = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const iconMap: Record<string, React.ReactNode> = {
  apartment: <HouseApartment />,
  townhouse: <HouseRowHome />,
};

export default function HouseTypeSelector({
  value,
  onChange,
}: HouseTypeSelectorProps) {
  const [houseTypes, setHouseTypes] = useState<HouseType[]>([]);
  console.log("HouseTypeSelector - houseTypes=", houseTypes);

  useEffect(() => {
    const onLoad = async () => {
      let types = await getHouseTypes();
      console.log("HouseTypeSelector - types=", types);
      (types as { id: string; icon?: React.ReactNode }[]).forEach((type) => {
        type.icon = iconMap[type.id] ?? <HouseRowHome />;
      });
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
