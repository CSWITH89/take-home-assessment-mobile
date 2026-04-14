import { RESIDENT_TYPE_ICONS } from "@/src/constants";
import { SelectorProps } from "@/src/types/globalTypes";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function ResidentsSelector({
  value,
  onChange,
}: SelectorProps<number>) {
  const validValue = value > 0 && value < 6 ? value : 1;
  return (
    <View style={styles.container}>
      {RESIDENT_TYPE_ICONS.map((residentOption, index) => (
        <Pressable
          key={`residentOption-${index + 1}`}
          onPress={() => onChange(index + 1)}
          style={[styles.button, validValue === index + 1 && styles.selected]}
          accessibilityRole="button"
          accessibilityLabel={`residentOption-${index + 1}`}
          accessibilityState={{ selected: validValue === index + 1 }}
        >
          {residentOption}
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
    overflow: "visible",
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
