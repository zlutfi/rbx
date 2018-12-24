import classNames from "classnames";
import PropTypes from "prop-types";

import { Omit } from "../types";
import { tuple } from "../utils";

/**
 * Float
 */
export const FLOAT_PULLED_ALIGNMENTS = tuple("left", "right");
export type FloatPulledAlignments = (typeof FLOAT_PULLED_ALIGNMENTS)[number];

export type FloatHelpersProps = Partial<{
  /** Fixes an element's floating children */
  clearfix: boolean;
  /** Moves an element to the left or right */
  pull: FloatPulledAlignments;
}>;

export const floatHelpersPropTypes = {
  clearfix: PropTypes.bool,
  pull: PropTypes.oneOf(FLOAT_PULLED_ALIGNMENTS),
};

export const transformFloatHelpers: TransformFunc<FloatHelpersProps> = (
  props,
  componentName,
  location = "prop",
) => {
  PropTypes.checkPropTypes(
    floatHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const { clearfix, pull, ...rest } = props;
  const className = classNames(
    {
      "is-clearfix": clearfix,
      [`is-pulled-${pull}`]: pull,
    },
    props.className,
  );
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Overflow
 */
export type OverflowHelpersProps = Partial<{
  /** Adds overflow hidden */
  clipped: boolean;
}>;

export const overflowHelpersPropTypes = {
  clipped: PropTypes.bool,
};

export const transformOverflowHelpers: TransformFunc<OverflowHelpersProps> = (
  props,
  componentName,
  location = "prop",
) => {
  PropTypes.checkPropTypes(
    overflowHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const { clipped, ...rest } = props;
  const className = classNames({ "is-clipped": clipped }, props.className);
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Overlay
 */
export type OverlayHelpersProps = Partial<{
  /** Completely covers the first positioned parent */
  overlay: boolean;
}>;

export const overlayHelpersPropTypes = {
  overlay: PropTypes.bool,
};

export const transformOverlayHelpers: TransformFunc<OverlayHelpersProps> = (
  props,
  componentName,
  location = "prop",
) => {
  PropTypes.checkPropTypes(
    overlayHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const { overlay, ...rest } = props;
  const className = classNames({ "is-overlay": overlay }, props.className);
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Typography
 */
export const COLORS = tuple(
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
  "white",
  "black",
  "link",
);
export type Colors = (typeof COLORS)[number];

export const GREY_COLORS = tuple(
  "black-bis",
  "black-ter",
  "grey-darker",
  "grey-dark",
  "grey",
  "grey-light",
  "grey-lighter",
  "white-ter",
  "white-bis",
);
export type GreyColors = (typeof GREY_COLORS)[number];

export const TEXT_ALIGNMENTS = tuple("centered", "justified", "left", "right");
export type TextAlignments = (typeof TEXT_ALIGNMENTS)[number];

export const TEXT_SIZES = tuple(1, 2, 3, 4, 5, 6);
export type TextSizes = (typeof TEXT_SIZES)[number];

export const TEXT_TRANSFORMS = tuple("capitalized", "lowercase", "uppercase");
export type TextTransforms = (typeof TEXT_TRANSFORMS)[number];

export const TEXT_WEIGHTS = tuple("light", "normal", "semibold", "bold");
export type TextWeights = (typeof TEXT_WEIGHTS)[number];

export type TypographyHelpersProps = Partial<{
  backgroundColor: Colors | GreyColors;
  italic: boolean;
  textAlignment: TextAlignments;
  textColor: Colors | GreyColors;
  textSize: TextSizes;
  textTransform: TextTransforms;
  textWeight: TextWeights;
}>;

export const typographyHelpersPropTypes = {
  backgroundColor: PropTypes.oneOf([...COLORS, ...GREY_COLORS]),
  italic: PropTypes.bool,
  textAlignment: PropTypes.oneOf(TEXT_ALIGNMENTS),
  textColor: PropTypes.oneOf([...COLORS, ...GREY_COLORS]),
  textSize: PropTypes.oneOf(TEXT_SIZES),
  textTransform: PropTypes.oneOf(TEXT_TRANSFORMS),
  textWeight: PropTypes.oneOf(TEXT_WEIGHTS),
};

export const transformTypographyHelpers: TransformFunc<
  TypographyHelpersProps
> = (props, componentName, location = "prop") => {
  PropTypes.checkPropTypes(
    typographyHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const {
    backgroundColor,
    italic,
    textAlignment,
    textColor,
    textSize,
    textTransform,
    textWeight,
    ...rest
  } = props;

  const className = classNames(
    {
      [`has-background-${backgroundColor}`]: backgroundColor,
      [`has-text-${textColor}`]: textColor,
      "is-italic": italic,
      [`is-${textTransform}`]: textTransform,
      [`has-text-${textAlignment}`]: textAlignment,
      [`has-text-weight-${textWeight}`]: textWeight,
      [`is-size-${textSize}`]: !!textSize,
    },
    props.className,
  );
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Visibility
 */
export const DISPLAYS = tuple(
  "block",
  "flex",
  "inline",
  "inline-block",
  "inline-flex",
);
export type Displays = (typeof DISPLAYS)[number];

export type VisibilityHelpersProps = Partial<{
  /** Hides an element (unclear on where this is documented in Bulma) */
  hidden: boolean;
  /** Adds visibility hidden */
  invisible: boolean;
  /**
   * Hide elements visually but keep the element available to be announced by a
   * screen reader
   */
  srOnly: boolean;
}>;

export const visibilityHelpersPropTypes = {
  hidden: PropTypes.bool,
  invisible: PropTypes.bool,
  srOnly: PropTypes.bool,
};

export const transformVisibilityHelpers: TransformFunc<
  VisibilityHelpersProps
> = (props, componentName, location = "prop") => {
  PropTypes.checkPropTypes(
    visibilityHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const { hidden, invisible, srOnly, ...rest } = props;
  const className = classNames(
    {
      "is-hidden": hidden,
      "is-invisible": invisible,
      "is-sr-only": srOnly,
    },
    props.className,
  );
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Other
 */
export type OtherHelpersProps = Partial<{
  /** Removes any margin */
  marginless: boolean;
  /** Removes any padding */
  paddingless: boolean;
  /** Removes any radius */
  radiusless: boolean;
  /** Removes any shadow */
  shadowless: boolean;
  /** Prevents the text from being selectable */
  unselectable: boolean;
}>;

export const otherHelpersPropTypes = {
  marginless: PropTypes.bool,
  paddingless: PropTypes.bool,
  radiusless: PropTypes.bool,
  shadowless: PropTypes.bool,
  unselectable: PropTypes.bool,
};

export const transformOtherHelpers: TransformFunc<OtherHelpersProps> = (
  props,
  componentName,
  location = "prop",
) => {
  PropTypes.checkPropTypes(
    otherHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const {
    marginless,
    paddingless,
    radiusless,
    shadowless,
    unselectable,
    ...rest
  } = props;

  const className = classNames(
    {
      "is-marginless": props.marginless,
      "is-paddingless": props.paddingless,
      "is-radiusless": props.radiusless,
      "is-shadowless": props.shadowless,
      "is-unselectable": props.unselectable,
    },
    props.className,
  );
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Responsive
 */
export const BREAKPOINTS = tuple(
  "mobile",
  "tablet",
  "desktop",
  "widescreen",
  "fullhd",
  "touch",
);
export type Breakpoints = (typeof BREAKPOINTS)[number];

export type LimitiedResponsiveBreakpointProps = Partial<{
  display: {
    value: Displays;
  };
  hide: {
    value: boolean;
  };
  textAlignment: {
    value: TextAlignments;
  };
  textSize: {
    value: TextSizes;
  };
}>;

export type ResponsiveBreakpointProps = Partial<{
  display: {
    only?: boolean;
    value: Displays;
  };
  hide: {
    only?: boolean;
    value: boolean;
  };
  textAlignment: {
    only?: boolean;
    value: TextAlignments;
  };
  textSize: {
    only?: boolean;
    value: TextSizes;
  };
}>;

export type ResponsiveHelpersProps = Partial<{
  responsive: Partial<{
    mobile: LimitiedResponsiveBreakpointProps;
    tablet: ResponsiveBreakpointProps;
    desktop: ResponsiveBreakpointProps;
    widescreen: ResponsiveBreakpointProps;
    fullhd: LimitiedResponsiveBreakpointProps;
    touch: LimitiedResponsiveBreakpointProps;
  }>;
}>;

export const responsiveBreakpointPropTypes = {
  display: PropTypes.shape({
    only: PropTypes.bool,
    value: PropTypes.oneOf(DISPLAYS).isRequired,
  }),
  hide: PropTypes.shape({
    only: PropTypes.bool,
    value: PropTypes.bool.isRequired,
  }),
  textAlignment: PropTypes.shape({
    only: PropTypes.bool,
    value: PropTypes.oneOf(TEXT_ALIGNMENTS).isRequired,
  }),
  textSize: PropTypes.shape({
    only: PropTypes.bool,
    value: PropTypes.oneOf(TEXT_SIZES).isRequired,
  }),
};

export const limitedResponsiveBreakpointPropTypes = {
  display: PropTypes.shape({
    value: PropTypes.oneOf(DISPLAYS).isRequired,
  }),
  hide: PropTypes.shape({
    value: PropTypes.bool.isRequired,
  }),
  textAlignment: PropTypes.shape({
    value: PropTypes.oneOf(TEXT_ALIGNMENTS).isRequired,
  }),
  textSize: PropTypes.shape({
    value: PropTypes.oneOf(TEXT_SIZES).isRequired,
  }),
};

export const responsiveHelpersPropTypes = {
  responsive: PropTypes.shape({
    // tslint:disable:object-literal-sort-keys
    mobile: PropTypes.shape(limitedResponsiveBreakpointPropTypes),
    tablet: PropTypes.shape(responsiveBreakpointPropTypes),
    desktop: PropTypes.shape(responsiveBreakpointPropTypes),
    widescreen: PropTypes.shape(responsiveBreakpointPropTypes),
    fullhd: PropTypes.shape(limitedResponsiveBreakpointPropTypes),
    touch: PropTypes.shape(limitedResponsiveBreakpointPropTypes),
    // tslint:enable:object-literal-sort-keys
  }),
};

export const transformResponsiveHelpers: TransformFunc<
  ResponsiveHelpersProps
> = (props, componentName, location = "prop") => {
  PropTypes.checkPropTypes(
    responsiveHelpersPropTypes,
    props,
    location,
    componentName,
  );

  const { responsive, ...rest } = props;

  const className = classNames(
    responsive &&
      Object.keys(responsive)
        .filter(breakpoint => responsive![breakpoint])
        .map(breakpoint => {
          const names = {};
          const { display, hide, textAlignment, textSize } = responsive![
            breakpoint
          ] as ResponsiveBreakpointProps | LimitiedResponsiveBreakpointProps;
          if (display) {
            const value = display.value;
            const only = "only" in display ? display.only : false;
            names[`is-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
          }
          if (hide) {
            const value = hide.value;
            const only = "only" in hide ? hide.only : false;
            names[`is-hidden-${breakpoint}${only ? "-only" : ""}`] = value;
          }
          if (textAlignment) {
            const value = textAlignment.value;
            const only = "only" in textAlignment ? textAlignment.only : false;
            names[
              `has-text-${value}-${breakpoint}${only ? "-only" : ""}`
            ] = value;
          }
          if (textSize) {
            const value = textSize.value;
            const only = "only" in textSize ? textSize.only : false;
            names[
              `is-size-${value}-${breakpoint}${only ? "-only" : ""}`
            ] = !!value;
          }
          return names;
        })
        .reduce((acc, cv) => ({ ...acc, ...cv }), {}),
    props.className,
  );
  return Object.assign(rest, className ? { className } : {});
};

/**
 * Union of helpers
 */
export type HelpersProps = FloatHelpersProps &
  OverflowHelpersProps &
  OverlayHelpersProps &
  TypographyHelpersProps &
  VisibilityHelpersProps &
  OtherHelpersProps &
  ResponsiveHelpersProps & { className?: string };

export const helpersPropTypes = {
  ...floatHelpersPropTypes,
  ...overflowHelpersPropTypes,
  ...overlayHelpersPropTypes,
  ...typographyHelpersPropTypes,
  ...visibilityHelpersPropTypes,
  ...otherHelpersPropTypes,
  ...responsiveHelpersPropTypes,
  className: PropTypes.string,
};

export const combineTransformFunctions = <TTransformProps>(
  ...funcs: Array<TransformFunc<any>>
): TransformFunc<TTransformProps> => (
  props,
  componentName,
  location = "prop",
) => {
  let transformed: any = props;
  for (const func of funcs) {
    transformed = func(transformed, componentName, location);
  }
  return transformed;
};

export const transformHelpers = combineTransformFunctions<HelpersProps>(
  transformFloatHelpers,
  transformOverflowHelpers,
  transformOverlayHelpers,
  transformTypographyHelpers,
  transformVisibilityHelpers,
  transformOtherHelpers,
  transformResponsiveHelpers,
);

export type TransformFunc<TTransformProps> = <
  TProps extends object & TTransformProps & { className?: string }
>(
  props: TProps,
  componentName: string,
  location?: string,
) => Omit<TProps, keyof TTransformProps> & { className?: string };
