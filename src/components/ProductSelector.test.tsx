import { render, screen } from "@testing-library/react-native";
import ProductSelector from "./ProductSelector";

jest.mock("@/src/icons", () => ({
  Electric: "Electric",
  ElectricAndGas: "ElectricAndGas",
}));

describe("ProductTypeSelector", () => {
  it("what to do with made up things?", async () => {
    const houseType = "something-made-up";
    render(<ProductSelector value={houseType} onChange={() => {}} />);

    const button = await screen.findByRole("button", {
      name: "electric-and-gas",
    });
    expect(button).toBeSelected();
  });
});
