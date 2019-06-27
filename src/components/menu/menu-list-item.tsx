import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";

export type MenuListItemModifierProps = {
  active?: boolean;
  menu?: React.ReactNode;
};

export type MenuListItemProps = HelpersProps & MenuListItemModifierProps;

export const MenuListItem = forwardRefAs<MenuListItemProps>(
  ({ active, className, menu, ...rest }, ref) => (
    <li>
      <Generic
        ref={ref}
        className={classNames({ "is-active": active }, className)}
        {...rest}
      />
      {menu}
    </li>
  ),
  { as: "a" },
);

MenuListItem.displayName = "Menu.List.Item";
MenuListItem.propTypes = {
  active: PropTypes.bool,
  menu: PropTypes.node,
};
