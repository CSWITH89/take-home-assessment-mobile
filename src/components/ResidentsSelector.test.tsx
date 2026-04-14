import { render, screen } from "@testing-library/react-native";
import ResidentsSelector from "./ResidentsSelector";

jest.mock("@/src/icons", () => ({
  People1: "People1",
  People2: "People2",
  People3: "People3",
  People4: "People4",
  People5: "People5",
}));

describe("ProductTypeSelector", () => {
  it("validates", async () => {
    const residents = 100;
    render(<ResidentsSelector value={residents} onChange={() => {}} />);

    const button = await screen.findByRole("button", {
      name: "residentOption-1",
    });
    expect(button).toBeSelected();
  });
});
