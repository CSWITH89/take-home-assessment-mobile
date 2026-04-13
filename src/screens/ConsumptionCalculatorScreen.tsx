import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HouseTypeSelector from "@/src/components/HouseTypeSelector";
import ProductSelector from "@/src/components/ProductSelector";
import ResidentsSelector from "@/src/components/ResidentsSelector";
import { HOUSE_TYPE_LABELS, PRODUCT_TYPE_LABELS } from "@/src/constants";
import {
  ConsumptionTotal,
  HouseTypeId,
  ProductTypeId,
} from "@/src/types/globalTypes";

export default function ConsumptionCalculatorScreen() {
  const [houseType, setHouseType] = useState<HouseTypeId>("apartment");
  const [productType, setProductType] =
    useState<ProductTypeId>("electric-and-gas");
  const [residents, setResidents] = useState(1);
  const [hasSolarPanels, setHasSolarPanels] = useState(false);
  const [consumption, setConsumption] = useState<ConsumptionTotal>({
    electricity: 0,
  });

  console.log("ConsumptionCalculator - computedConsumption=", consumption);

  const handleResidentsSelectorChange = (incomingResidents: number) => {
    if (incomingResidents > 0) {
      if (incomingResidents < 10) {
        setResidents(incomingResidents);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.calculator}>
          <Text style={styles.title}>Verbruik berekenen</Text>

          <View style={styles.selectorSection}>
            <View style={styles.selector}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Type woning:</Text>
                <Text style={styles.labelSelected}>
                  {HOUSE_TYPE_LABELS[houseType]}
                </Text>
              </View>
              <HouseTypeSelector value={houseType} onChange={setHouseType} />
            </View>
            <View style={styles.selector}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Aantal bewoners:</Text>
                <Text style={styles.labelRow}>{residents}</Text>
              </View>
              <ResidentsSelector
                value={residents}
                onChange={handleResidentsSelectorChange}
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Product:</Text>
              <Text style={styles.labelSelected}>
                {PRODUCT_TYPE_LABELS[productType]}
              </Text>
            </View>
            <ProductSelector value={productType} onChange={setProductType} />
          </View>

          <View style={styles.footer}>
            <Pressable
              style={styles.checkboxRow}
              onPress={() => setHasSolarPanels(!hasSolarPanels)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: hasSolarPanels }}
            >
              <View
                style={[
                  styles.checkboxBox,
                  hasSolarPanels && styles.checkboxChecked,
                ]}
              />
              <Text style={styles.checkboxLabel}>Zonnepanelen</Text>
              <Text style={styles.infoIcon}>ⓘ</Text>
            </Pressable>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Ok →</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  calculator: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    padding: 24,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
  },
  selectorSection: {
    gap: 16,
  },
  selector: {
    flex: 1,
    gap: 10,
    overflow: "hidden",
  },
  section: {
    gap: 10,
  },
  label: {
    color: "#374151",
    fontWeight: "600",
    fontSize: 14,
  },
  labelSelected: {
    color: "#374151",
    fontWeight: "400",
    fontSize: 14,
  },
  labelRow: {
    flexDirection: "row",
    gap: 2,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxBox: {
    marginRight: 8,
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderRadius: 3,
    backgroundColor: "white",
  },
  checkboxChecked: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  checkboxLabel: {
    color: "#374151",
    fontSize: 14,
  },
  infoIcon: {
    color: "#9ca3af",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#1f2937",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});
