import calculateConsumption from "./calculateConsumption";

describe("calculateConsumption", () => {
  it("calculates electricity only", () => {
    const result = calculateConsumption({
      houseType: "apartment",
      residents: 1,
      productType: "electric",
      hasSolarPanels: false,
    });

    expect(result.electricity).toBeGreaterThan(0);
    expect(result.gas).toBeUndefined();
  });

  it("calculates electricity and gas", () => {
    const result = calculateConsumption({
      houseType: "apartment",
      residents: 1,
      productType: "electric-and-gas",
      hasSolarPanels: false,
    });

    expect(result.electricity).toBeGreaterThan(0);
    expect(result.gas).toBeGreaterThan(0);
  });

  it("reduces electricity when solar panels are present", () => {
    const withoutSolar = calculateConsumption({
      houseType: "townhouse",
      residents: 2,
      productType: "electric",
      hasSolarPanels: false,
    });

    const withSolar = calculateConsumption({
      houseType: "townhouse",
      residents: 2,
      productType: "electric",
      hasSolarPanels: true,
    });

    expect(withSolar.electricity).toBeLessThan(withoutSolar.electricity);
  });

  it("increases consumption with more residents", () => {
    const singleResident = calculateConsumption({
      houseType: "detached-house",
      residents: 1,
      productType: "electric-and-gas",
      hasSolarPanels: false,
    });

    const multiResident = calculateConsumption({
      houseType: "detached-house",
      residents: 4,
      productType: "electric-and-gas",
      hasSolarPanels: false,
    });

    expect(multiResident.electricity).toBeGreaterThan(
      singleResident.electricity,
    );
    expect(multiResident.gas!).toBeGreaterThan(singleResident.gas!);
  });
});
