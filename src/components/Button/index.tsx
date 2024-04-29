import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;
const variants = {
  outline: {
    white_A700: "border-white-A700 border-2 border-solid text-white-A700",
    cyan_600: "border-cyan-600 border-2 border-solid text-cyan-600",
  },
  fill: {
    cyan_600: "bg-cyan-600 text-white-A700",
    gray_100: "bg-gray-100 text-indigo-900",
  },
} as const;
const sizes = {
  xs: "h-[36px] px-[7px] text-base",
  sm: "h-[56px] px-8 text-lg",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant &&
          variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
