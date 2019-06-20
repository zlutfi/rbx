import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";

import { Generic, forwardRefAs } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
import { NavbarBrand } from "./navbar-brand";
import { NavbarBurger } from "./navbar-burger";
import { NavbarContext } from "./navbar-context";
import { NavbarDivider } from "./navbar-divider";
import { NavbarDropdown } from "./navbar-dropdown";
import { NavbarItem } from "./navbar-item";
import { NavbarLink } from "./navbar-link";
import { NavbarMenu } from "./navbar-menu";
import { NavbarSegment } from "./navbar-segment";

export const NAVBAR_DEFAULTS = {
  fixedAlignments: ["top", "bottom"] as const,
};

export interface NavbarVariablesOverrides {}

export interface NavbarVariablesDefaults {
  fixedAlignments: (typeof NAVBAR_DEFAULTS["fixedAlignments"])[number];
}

export type NavbarVariables = Prefer<
  NavbarVariablesOverrides,
  NavbarVariablesDefaults
>;

export type NavbarModifierProps = {
  /** * Determines whether the menu is displayed on mobile */
  active?: boolean;
  color?: Variables["colors"];
  document?: Document;
  fixed?: NavbarVariables["fixedAlignments"];
  managed?: boolean;
  transparent?: boolean;
};

export type NavbarProps = HelpersProps & NavbarModifierProps;

export const Navbar = Object.assign(
  forwardRefAs<NavbarProps>(
    (
      {
        active: _active,
        className,
        color,
        document: _document,
        fixed,
        managed,
        transparent = false,
        ...rest
      },
      ref,
    ) => {
      const [active, _setActive] = useState(
        Boolean(managed) ? Boolean(_active) : false,
      );
      const setActive = useCallback(
        (active: boolean) => {
          if (managed !== true) {
            _setActive(active);
          }
        },
        [managed],
      );
      useEffect(() => setActive(Boolean(_active)), [_active, setActive]);

      useEffect(() => {
        const doc = _document !== undefined ? _document : document;
        const html = doc.querySelector("html");
        /* istanbul ignore if: typeguard */
        if (html === null) {
          return undefined;
        }

        html.classList.remove("has-navbar-fixed-top");
        html.classList.remove("has-navbar-fixed-bottom");
        if (fixed !== undefined) {
          html.classList.add(`has-navbar-fixed-${fixed}`);
        }

        return () => html.classList.remove(`has-navbar-fixed-${fixed}`);
      }, [_document]);

      return (
        <NavbarContext.Provider value={{ active, setActive }}>
          <Generic
            className={classNames(
              "navbar",
              {
                "is-transparent": transparent,
                [`is-fixed-${fixed}`]: fixed,
                [`is-${color}`]: color,
              },
              className,
            )}
            ref={ref}
            role="navigation"
            {...rest}
          />
        </NavbarContext.Provider>
      );
    },
    { as: "nav" },
  ),
  {
    Brand: NavbarBrand,
    Burger: NavbarBurger,
    Context: NavbarContext,
    Divider: NavbarDivider,
    Dropdown: NavbarDropdown,
    Item: NavbarItem,
    Link: NavbarLink,
    Menu: NavbarMenu,
    Segment: NavbarSegment,
  },
);

Navbar.displayName = "Navbar";
Navbar.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  document: PropTypes.object,
  fixed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  managed: PropTypes.bool,
  transparent: PropTypes.bool,
};
