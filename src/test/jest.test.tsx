import { render, screen } from "@testing-library/react";
import Jest from "@/pages/jest";

describe("<Jest />", () => {
  it("renders a heading", () => {
    const { container } = render(<Jest />);

    const jest = screen.getByText("JestTest");

    expect(jest).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
