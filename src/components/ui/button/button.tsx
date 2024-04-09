import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import s from "./button.module.scss";
import clsx from "clsx";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: "primary" | "secondary"
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const { as: Component = "button", className, fullWidth, variant = "primary", ...rest } = props;
  const classNames = clsx(`${s[variant]} ${fullWidth ? s.fullWidth : ""} ${className}`);
  return (
    <Component className={classNames} {...rest} />
  );
};
