export type HouseTypeId =
  | "apartment"
  | "townhouse"
  | "corner-house"
  | "two-under-one-roof"
  | "detached-house";

export type HouseType = {
  id: HouseTypeId;
  label: string;
  icon?: React.ReactNode;
};

export type ProductTypeId = "electric" | "electric-and-gas";

export type ProductType = {
  id: ProductTypeId;
  label: string;
  icon: React.ReactNode;
};

export type IconRecord =
  | Record<HouseTypeId, React.ReactNode>
  | Record<ProductTypeId, React.ReactNode>;

export interface SelectorProps<T> {
  value: T;
  onChange: (value: T) => void;
}

export interface ConsumptionTotal {
  electricity: number;
  gas?: number;
}

export interface CalcConsumptionParams {
  houseType: HouseTypeId;
  residents: number;
  productType: ProductTypeId;
  hasSolarPanels: boolean;
}

export type ConsumptionRecord = Record<HouseTypeId, number>;
