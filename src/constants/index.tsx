import {
  ConsumptionRecord,
  HouseIconRecord,
  HouseTypeId,
  ProductIconRecord,
  ProductTypeId,
} from "@/src//types/globalTypes";
import {
  Electric,
  ElectricAndGas,
  HouseApartment,
  HouseCornerHouse,
  HouseFreestanding,
  HouseRowHome,
  HouseSemiDetached,
  People1,
  People2,
  People3,
  People4,
  People5,
} from "@/src/icons";

export const HOUSE_TYPE_LABELS: Record<HouseTypeId, string> = {
  apartment: "Appartement",
  townhouse: "Tussenwoning",
  "corner-house": "Hoekwoning",
  "two-under-one-roof": "2 onder 1 Kap",
  "detached-house": "Vrijstaand",
};

export const PRODUCT_TYPE_LABELS: Record<ProductTypeId, string> = {
  electric: "Stroom",
  "electric-and-gas": "Stroom & Gas",
};

export const HOUSE_ICON_MAP: HouseIconRecord = {
  apartment: <HouseApartment />,
  townhouse: <HouseRowHome />,
  "corner-house": <HouseCornerHouse />,
  "two-under-one-roof": <HouseSemiDetached />,
  "detached-house": <HouseFreestanding />,
};

export const RESIDENT_TYPE_ICONS: React.ReactNode[] = [
  <People1 key="people-1" />,
  <People2 key="people-2" />,
  <People3 key="people-3" />,
  <People4 key="people-4" />,
  <People5 key="people-5" />,
];

export const PRODUCT_TYPES = [
  { id: "electric", label: "Stroom" },
  { id: "electric-and-gas", label: "Stroom & Gas" },
];

export const PRODUCT_ICON_MAP: ProductIconRecord = {
  electric: <Electric />,
  "electric-and-gas": <ElectricAndGas />,
};

export const GAS_UNITS = "m³/jaar";
export const ELECTRICITY_UNITS = "kWh/jaar";

export const AVG_YEARLY_GAS: ConsumptionRecord = {
  apartment: 750,
  townhouse: 990,
  "corner-house": 1160,
  "two-under-one-roof": 1320,
  "detached-house": 1740,
};

export const AVG_YEARLY_ELECTRICITY: ConsumptionRecord = {
  apartment: 2000,
  townhouse: 2500,
  "corner-house": 2800,
  "two-under-one-roof": 3000,
  "detached-house": 3500,
};

export const SOLAR_PANEL_REDUCTION: number = 300;

export const PER_PERSON_MODIFIER = 0.2;
