import React from "react";
import renderer from "react-test-renderer";

import { ResponsiveSizeProps } from "@/modifiers/responsives";
import { Container } from "../Container";

describe("Container component", () => {
  it("Should have container classname", () => {
    const component = renderer.create(
      <Container>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should have helper classnames", () => {
    const component = renderer.create(
      <Container
        paddingless
        responsive={
          {
            desktop: {
              hide: {
                value: true,
              },
            },
            touch: {
              display: {
                value: "flex",
              },
            },
            widescreen: {
              display: {
                only: true,
                value: "block",
              },
            },
          } as ResponsiveSizeProps
        }
      >
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});