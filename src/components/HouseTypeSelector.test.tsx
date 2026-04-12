import { render, screen } from "@testing-library/react-native";
import HouseTypeSelector from "./HouseTypeSelector";

jest.mock("@/src/icons", () => ({
  HouseApartment: "HouseApartment",
  HouseRowHome: "HouseRowHome",
}));

describe("HouseTypeSelector", () => {
  it("what to do with made up things?", async () => {
    const houseType = "something-made-up";
    render(<HouseTypeSelector value={houseType} onChange={() => {}} />);

    const button = await screen.findByRole("button", { name: "apartment" });
    expect(button).toBeSelected();
  });
});
