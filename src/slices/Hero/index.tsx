import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/bounded";
import Button from "@/components/button";
import Heading from "@/components/heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-8 mb-4  first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className=" text-2xl font-body text-center font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
};
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center items-center">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className=" mb-8 md:mb-10">
          {slice.primary.button_text}
        </Button>
        <PrismicNextImage
          field={slice.primary.image}
          className="drop-shadow-xl max-w-4xl w-full"
        />
      </div>
    </Bounded>
  );
};

export default Hero;
