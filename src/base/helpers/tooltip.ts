import classNames from "classnames";
import PropTypes from "prop-types";

import {
  makePropTypesFactory,
  makeValidatingTransformFactory,
  TransformFunction,
} from "./factory";
import { DEFAULTS, Variables } from "./variables";

export type TooltipHelpersProps = Partial<{
  tooltip: number | string;
  tooltipActive: boolean;
  tooltipColor: Variables["colors"];
  tooltipMultiline: boolean;
  tooltipPosition: (typeof DEFAULTS["tooltipPositions"])[number];
  tooltipResponsive: {
    [K in Variables["breakpoints"]]?: (typeof DEFAULTS["tooltipPositions"])[number];
  };
}>;

// Factories
export const makePropTypes = makePropTypesFactory(vars => ({
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tooltipActive: PropTypes.bool,
  tooltipColor: PropTypes.oneOf(vars.colors),
  tooltipMultiline: PropTypes.bool,
  tooltipPosition: PropTypes.oneOf(vars.tooltipPositions),
  tooltipResponsive: PropTypes.objectOf(PropTypes.oneOf(vars.tooltipPositions)),
}));

export const transform: TransformFunction<TooltipHelpersProps> = props => {
  const {
    tooltip,
    tooltipActive,
    tooltipColor,
    tooltipMultiline,
    tooltipPosition,
    tooltipResponsive = {},
    ...rest
  } = props;

  rest.className = classNames(
    {
      "is-tooltip-active": tooltipActive,
      [`is-tooltip-${tooltipColor}`]: tooltipColor,
      "is-tooltip-multiline": tooltipMultiline,
      [`is-tooltip-${tooltipPosition}`]: tooltipPosition,
      tooltip,
    },
    ...Object.keys(tooltipResponsive).map(
      breakpoint => `is-tooltip-${tooltipResponsive[breakpoint]}-${breakpoint}`,
    ),
    rest.className,
  );

  if (tooltip !== undefined) {
    rest["data-tooltip"] = tooltip;
  }

  return rest;
};

export const makeValidatingTransform = makeValidatingTransformFactory(
  makePropTypes,
  transform,
);