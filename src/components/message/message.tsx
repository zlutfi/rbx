import classNames from "classnames";
import * as PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic, HelpersProps } from "../../base";
import { DEFAULTS, Variables } from "../../base/helpers/variables";
import { tuple } from "../../utils";
import { MessageBody } from "./message-body";
import { MessageHeader } from "./message-header";

export const MESSAGE_SIZES = tuple("small", "medium", "large");
export type MessageSizes = (typeof MESSAGE_SIZES)[number];

export type MessageModifierProps = Partial<{
  color: Variables["Colors"];
  size: MessageSizes;
}>;

export type MessageProps = HelpersProps & MessageModifierProps;

const propTypes = {
  color: PropTypes.oneOf(DEFAULTS.colors),
  size: PropTypes.oneOf(MESSAGE_SIZES),
};

export const Message = Object.assign(
  forwardRefAs<MessageProps, "article">(
    ({ className, color, size, ...rest }, ref) => (
      <Generic
        className={classNames(
          "message",
          {
            [`is-${color}`]: color,
            [`is-${size}`]: size,
          },
          className,
        )}
        ref={ref}
        {...rest}
      />
    ),
    { as: "article" },
  ),
  {
    Body: MessageBody,
    Header: MessageHeader,
    propTypes,
  },
);
