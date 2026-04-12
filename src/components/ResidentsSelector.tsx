import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { People1, People2, People3, People4, People5 } from "@/src/icons";

const residentOptions = [
  <People1 />,
  <People2 />,
  <People3 />,
  <People4 />,
  <People5 />,
];

interface ResidentsSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export default function ResidentsSelector({
  value,
  onChange,
}: ResidentsSelectorProps) {
  return (
    <View style={styles.container}>
      {residentOptions.map((residentOption, index) => (
        <Pressable
          key={`residentOption-${index + 1}`}
          onPress={() => onChange(index + 1)}
          style={[styles.button, value === index + 1 && styles.selected]}
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
