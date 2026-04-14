import {
  AVG_YEARLY_ELECTRICITY,
  AVG_YEARLY_GAS,
  SOLAR_PANEL_REDUCTION,
} from "@/src/constants";
import {
  CalcConsumptionParams,
  ConsumptionTotal,
  HouseTypeId,
} from "@/src/types/globalTypes";

const calculateGasConsumption = (houseType: HouseTypeId, residents: number) => {
  const baselineGasConsumption = AVG_YEARLY_GAS[houseType];
  const perPersonGasMod = baselineGasConsumption * 0.2;

  return baselineGasConsumption + residents * perPersonGasMod;
};

const calculateElectricityConsumption = (
  houseType: HouseTypeId,
  residents: number,
  hasSolarPanels: boolean,
) => {
  const baselineElectricityConsumption = AVG_YEARLY_ELECTRICITY[houseType];
  const perPersonElectricityMod = baselineElectricityConsumption * 0.2;

  let totalElectricityConsumption =
    baselineElectricityConsumption + residents * perPersonElectricityMod;
  if (hasSolarPanels) totalElectricityConsumption -= SOLAR_PANEL_REDUCTION;

  return totalElectricityConsumption;
};

const calculateConsumption = ({
  houseType,
  residents,
  productType,
  hasSolarPanels,
}: CalcConsumptionParams): ConsumptionTotal => {
  const consumption: ConsumptionTotal = {
    electricity: 0,
  };

  if (productType === "electric-and-gas") {
    consumption.electricity = calculateElectricityConsumption(
      houseType,
      residents,
      hasSolarPanels,
    );
    consumption.gas = calculateGasConsumption(houseType, residents);
  } else if (productType === "electric") {
    consumption.electricity = calculateElectricityConsumption(
      houseType,
      residents,
      hasSolarPanels,
    );
  }

  return consumption;
};

export default calculateConsumption;
