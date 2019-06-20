// import Enzyme from "enzyme";
import { JSDOM } from "jsdom";
import React from "react";

import { DEFAULTS } from "src/base/helpers/variables";
import { Navbar, NAVBAR_DEFAULTS } from "src/components/navbar/navbar";
import { NavbarBrand } from "src/components/navbar/navbar-brand";
import { NavbarBurger } from "src/components/navbar/navbar-burger";
import {
  NavbarContext,
  NavbarContextValue,
} from "src/components/navbar/navbar-context";
import { NavbarDivider } from "src/components/navbar/navbar-divider";
import { NavbarDropdown } from "src/components/navbar/navbar-dropdown";
import { NavbarItem } from "src/components/navbar/navbar-item";
import { NavbarLink } from "src/components/navbar/navbar-link";
import { NavbarMenu } from "src/components/navbar/navbar-menu";
import { NavbarSegment } from "src/components/navbar/navbar-segment";

import {
  GetInnerShallowWrapperFunction,
  hasProperties,
  makeShallowWrapperFactory,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
  validateBoolPropType,
  validatePropType,
  validateStringOrNumberPropType,
  withEnzymeMount,
  // makeReactWrapperFactory,
} from "src/__tests__/testing";
import { act } from "react-dom/test-utils";

const COMPONENT = Navbar;
const DISPLAY_NAME = "Navbar";
const DEFAULT_ELEMENT = "nav";
const BULMA_CLASS_NAME = "navbar";

const getLeafInnerShallowWrapper: GetInnerShallowWrapperFunction = wrapper =>
  wrapper // Component
    .dive() // Context Provider
    .dive() // Generic
    .dive();

describe(`${DISPLAY_NAME} component`, () => {
  hasProperties(COMPONENT, {
    Brand: NavbarBrand,
    Burger: NavbarBurger,
    Context: NavbarContext,
    Divider: NavbarDivider,
    Dropdown: NavbarDropdown,
    Item: NavbarItem,
    Link: NavbarLink,
    Menu: NavbarMenu,
    Segment: NavbarSegment,
    defaultProps: { as: DEFAULT_ELEMENT },
  });

  testForwardRefAsExoticComponentIntegration(COMPONENT, {
    displayName: DISPLAY_NAME,
    bulmaClassName: BULMA_CLASS_NAME,
    defaultElement: DEFAULT_ELEMENT,
    makeShallowWrapper: makeShallowWrapperFactory(getLeafInnerShallowWrapper),
  });

  testThemeIntegration(COMPONENT, {
    makeShallowWrapper: makeShallowWrapperFactory(getLeafInnerShallowWrapper),
  });

  describe("props", () => {
    const { propTypes } = COMPONENT;
    const makeShallowWrapper = makeShallowWrapperFactory(
      getLeafInnerShallowWrapper,
    );

    describe("active", () => {
      validateBoolPropType(propTypes, "active");

      [false, true].map(active => {
        it(`should set active: ${active} in context`, () => {
          let contextValue: NavbarContextValue | undefined;
          const node = (
            <Navbar active={active}>
              <NavbarContext.Consumer>
                {context => {
                  contextValue = context;

                  return undefined;
                }}
              </NavbarContext.Consumer>
              />
            </Navbar>
          );
          withEnzymeMount({ node }, () => {
            if (contextValue === undefined) {
              throw new Error("should have contextValue");
            }
            expect(contextValue.active).toEqual(active);
          });
        });
      });
    });

    describe("color", () => {
      validateStringOrNumberPropType(propTypes, "color");

      DEFAULTS.colors.map(color => {
        it(`should be ${color}`, () => {
          const node = <Navbar color={color} />;
          const wrapper = makeShallowWrapper({ node });
          expect(wrapper.hasClass(`is-${color}`)).toBe(true);
        });
      });
    });

    describe("document", () => {
      validatePropType(propTypes, "document", [
        { value: document, valid: true, descriptor: "obj" },
        { value: "string", valid: false },
      ]);

      ["global", "provided"].map(docOpt => {
        it(`should use the ${docOpt} document`, () => {
          const ref = React.createRef<HTMLElement>();
          const doc =
            docOpt === "global" ? window.document : new JSDOM().window.document;
          const node = <Navbar document={doc} ref={ref} fixed="top" />;
          withEnzymeMount({ node }, () => {
            if (docOpt === "provided") {
              // make sure we're doing this right.
              expect(doc).not.toBe(window.document);
            }
            if (ref.current === null) {
              throw new Error("ref should be set");
            }
            const docHtml = doc.querySelector("html");
            if (docHtml === null) {
              throw new Error("doc html should exist");
            }
            expect(docHtml.className).toBe("has-navbar-fixed-top");
          });
        });
      });
    });

    describe("fixed", () => {
      validateStringOrNumberPropType(propTypes, "fixed");

      NAVBAR_DEFAULTS.fixedAlignments.map(fixed => {
        it(`should be ${fixed}`, () => {
          const node = <Navbar fixed={fixed} />;
          const wrapper = makeShallowWrapper({ node });
          expect(wrapper.hasClass(`is-fixed-${fixed}`)).toBe(true);
        });
      });
    });

    describe("managed", () => {
      validateBoolPropType(propTypes, "managed");

      [undefined, false, true].map(initialActive =>
        [undefined, false, true].map(managed => {
          const initialActiveAsBool = initialActive === true;
          it(`should ${
            managed === true ? "" : "not "
          }set NavbarContext's active (${initialActive} as ${initialActiveAsBool} -> ${!initialActiveAsBool})`, () => {
            let contextState: NavbarContextValue | undefined;
            const ref = React.createRef<HTMLDivElement>();

            const node = (
              <Navbar active={initialActive} managed={managed} ref={ref}>
                <NavbarContext.Consumer>
                  {context => {
                    contextState = context;

                    return undefined;
                  }}
                </NavbarContext.Consumer>
              </Navbar>
            );

            withEnzymeMount({ node }, ({ context: { wrapper } }) => {
              if (contextState === undefined) {
                throw new Error("should have contextState");
              }
              expect(contextState.active).toBe(initialActiveAsBool);
              act(() => {
                if (contextState === undefined) {
                  throw new Error("should have contextState");
                }
                contextState.setActive(!contextState.active);
              });
              expect(contextState.active).toBe(
                managed === true ? initialActiveAsBool : !initialActiveAsBool,
              );
            });
          });
        }),
      );
    });

    describe("transparent", () => {
      validateBoolPropType(propTypes, "transparent");

      [false, true].map(transparent => {
        it(`should ${transparent ? "" : "not "}be transparent`, () => {
          const node = <Navbar transparent={transparent} />;
          const wrapper = makeShallowWrapper({ node });
          expect(wrapper.hasClass("is-transparent")).toBe(transparent);
        });
      });
    });
  });
});
