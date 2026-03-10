import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HouseTypeSelector from '@/src/components/HouseTypeSelector';
import ResidentsSelector from '@/src/components/ResidentsSelector';
import ProductSelector from '@/src/components/ProductSelector';

const houseTypeLabels: Record<string, string> = {
  apartment: 'Appartement',
  townhouse: 'Tussenwoning',
  'corner-house': 'Hoekwoning',
  'two-under-one-roof': '2 onder 1 Kap',
  'detached-house': 'Vrijstaand',
};

export default function ConsumptionCalculatorScreen() {
  const [houseType, setHouseType] = useState('apartment');
  const [residents, setResidents] = useState(8);
  const [hasSolarPanels, setHasSolarPanels] = useState(false);
  const [consumption, setConsumption] = useState({});

  const computedConsumption = {
    electricity: 0,
    gas: 0,
  };

  console.log('ConsumptionCalculator - computedConsumption=', computedConsumption);

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

          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <Text style={styles.label}>Type woning:</Text>
              <HouseTypeSelector value={houseType} onChange={setHouseType} />
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Aantal bewoners:</Text>
              <ResidentsSelector value={residents} onChange={handleResidentsSelectorChange} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Product:</Text>
            <ProductSelector />
          </View>

          <View style={styles.footer}>
            <Pressable
              style={styles.checkboxRow}
              onPress={() => setHasSolarPanels(!hasSolarPanels)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: hasSolarPanels }}
            >
              <View style={[styles.checkboxBox, hasSolarPanels && styles.checkboxChecked]} />
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
    backgroundColor: '#f3f4f6',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  calculator: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    padding: 24,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
  },
  twoColumns: {
    flexDirection: 'row',
    gap: 16,
  },
  column: {
    flex: 1,
    gap: 10,
    overflow: 'hidden',
  },
  section: {
    gap: 10,
  },
  label: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    marginRight:8,
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 3,
    backgroundColor: 'white',
  },
  checkboxChecked: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  checkboxLabel: {
    color: '#374151',
    fontSize: 14,
  },
  infoIcon: {
    color: '#9ca3af',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1f2937',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});
