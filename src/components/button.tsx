import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

const Button = ({ className, ...restProps }: PrismicNextLinkProps) => {
  return (
    <div>
      <PrismicNextLink
        {...restProps}
        className={clsx("block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 border-e-slate-50 py-3 px-12 rounded-full font-display text-white text-base tracking-wide", className)}
      />
    </div>
  );
};

export default Button;
