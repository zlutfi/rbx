import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

import { useNavbarItem } from "./navbar-item-context";

export type NavbarLinkModifierProps = {
  arrowless?: boolean;
  onClick?: React.MouseEventHandler;
};

export type NavbarLinkProps = HelpersProps & NavbarLinkModifierProps;

export const NavbarLink = forwardRefAs<NavbarLinkProps>(
  ({ arrowless, className, onClick, ...rest }, ref) => {
    const { active, setActive } = useNavbarItem();

    const handleClick = React.useCallback(
      (event: React.MouseEvent) => {
        if (onClick !== undefined) {
          onClick(event);
        }
        setActive(!active);
      },
      [active, onClick, setActive],
    );

    return (
      <Generic
        ref={ref}
        className={classNames(
          "navbar-link",
          { "is-arrowless": arrowless },
          className,
        )}
        onClick={handleClick}
        {...rest}
      />
    );
  },
  { as: "span" },
);

NavbarLink.displayName = "Navbar.Link";
NavbarLink.propTypes = {
  arrowless: PropTypes.bool,
  onClick: PropTypes.func,
};
