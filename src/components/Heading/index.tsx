import React from "react";

const sizes = {
  "3xl": "text-7xl font-bold md:text-5xl",
  "2xl": "text-[56px] font-bold md:text-5xl sm:text-[42px]",
  xl: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  s: "text-lg font-bold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-base font-bold",
  lg: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-indigo-900 font-sans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
