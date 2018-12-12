import Enzyme from "enzyme";
import React from "react";

import { BREAKPOINTS } from "@/modifiers/responsive";
import { Level } from "../level";
import { LevelItem } from "../level-item";
import { LevelLeft } from "../level-left";
import { LevelRight } from "../level-right";

import { hasProperties } from "@/__tests__/helpers";

describe("Level component", () => {
  hasProperties(Level, {
    Item: LevelItem,
    Left: LevelLeft,
    Right: LevelRight,
    defaultProps: { as: "nav" },
  });

  it("should render as the default element", () => {
    const wrapper = Enzyme.shallow(<Level />);
    expect(wrapper.is("nav")).toBe(true);
  });

  it("should render as a custom component", () => {
    const as = "span";
    const wrapper = Enzyme.shallow(<Level as={as} />);
    expect(wrapper.is(as)).toBe(true);
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <Level ref={ref} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".level").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = Enzyme.shallow(<Level />);
    expect(wrapper.hasClass("level")).toBe(true);
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = Enzyme.shallow(<Level className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  /**
   * Props
   */
  BREAKPOINTS.map(breakpoint =>
    it(`should have breakpoint ${breakpoint}`, () => {
      const wrapper = Enzyme.shallow(<Level breakpoint={breakpoint} />);
      expect(wrapper.hasClass(`is-${breakpoint}`)).toBe(true);
    }),
  );
});