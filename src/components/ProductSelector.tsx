import {
  ProductType,
  ProductTypeId,
  SelectorProps,
} from "@/src/types/globalTypes";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { PRODUCT_ICON_MAP, PRODUCT_TYPES } from "../constants";
import { Electric } from "../icons";

export default function ProductSelector({
  value,
  onChange,
}: SelectorProps<ProductTypeId>) {
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  console.table(productTypes);

  useEffect(() => {
    const onLoad = async () => {
      let types = PRODUCT_TYPES;
      console.log("ProductTypeselector - types=", types);
      (types as { id: ProductTypeId; icon?: React.ReactNode }[]).forEach(
        (type) => {
          type.icon = PRODUCT_ICON_MAP[type.id as ProductTypeId] ?? (
            <Electric />
          );
        },
      );
      setProductTypes(types as ProductType[]);
    };
    onLoad();
  }, []);

  return (
    <View style={styles.container}>
      {productTypes.map((type) => (
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
