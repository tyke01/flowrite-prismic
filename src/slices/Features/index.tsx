import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Bounded from "@/components/bounded";
import Heading from "@/components/heading";

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="71" fill="none">
    <path
      stroke="#0891B2"
      strokeWidth="4.99"
      d="M2.67 35c0-12.57 0-18.86 3.9-22.76s10.2-3.9 22.76-3.9h13.34c12.57 0 18.85 0 22.76 3.9 3.9 3.9 3.9 10.19 3.9 22.76v6.67c0 12.57 0 18.85-3.9 22.76-3.9 3.9-10.2 3.9-22.76 3.9H29.33c-12.57 0-18.85 0-22.76-3.9-3.9-3.9-3.9-10.2-3.9-22.76z"
    ></path>
    <path
      stroke="#0891B2"
      strokeLinecap="round"
      strokeOpacity="0.5"
      strokeWidth="4.99"
      d="M19.33 8.33v-5m33.34 5v-5M4.33 25h63.34"
    ></path>
    <path
      fill="#0891B2"
      d="M56 51.67a3.33 3.33 0 1 1-6.67 0 3.33 3.33 0 0 1 6.67 0m0-13.34a3.33 3.33 0 1 1-6.67 0 3.33 3.33 0 0 1 6.67 0M39.33 51.67a3.33 3.33 0 1 1-6.66 0 3.33 3.33 0 0 1 6.66 0m0-13.34a3.33 3.33 0 1 1-6.66 0 3.33 3.33 0 0 1 6.66 0M22.67 51.67a3.33 3.33 0 1 1-6.67 0 3.33 3.33 0 0 1 6.67 0m0-13.34a3.33 3.33 0 1 1-6.67 0 3.33 3.33 0 0 1 6.67 0"
    ></path>
  </svg>
);

const BargraphIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <path
      stroke="#0891B2"
      strokeLinecap="round"
      strokeWidth="4.99"
      d="M73.33 73.33H6.67"
    ></path>
    <path
      stroke="#0891B2"
      strokeOpacity="0.5"
      strokeWidth="4.99"
      d="M70 73.33v-25a5 5 0 0 0-5-5H55a5 5 0 0 0-5 5v25"
    ></path>
    <path
      stroke="#0891B2"
      strokeWidth="4.99"
      d="M50 73.33V16.67c0-4.72 0-7.07-1.46-8.54C47.07 6.67 44.7 6.67 40 6.67c-4.71 0-7.07 0-8.54 1.46C30 9.6 30 11.95 30 16.67v56.66"
    ></path>
    <path
      stroke="#0891B2"
      strokeOpacity="0.5"
      strokeWidth="4.99"
      d="M30 73.33V31.67a5 5 0 0 0-5-5H15a5 5 0 0 0-5 5v41.66"
    ></path>
  </svg>
);

const CloverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <path
      stroke="#0891B2"
      strokeOpacity="0.5"
      strokeWidth="4.99"
      d="M26.67 26.67h26.66v26.66H26.67z"
    ></path>
    <path
      stroke="#0891B2"
      strokeWidth="4.99"
      d="M53.33 53.34h10a10 10 0 1 1-10 10zm-26.66 0h-10a10 10 0 1 0 10 10zm26.66-26.67h10a10 10 0 1 0-10-10zm-26.66 0h-10a10 10 0 1 1 10-10z"
    ></path>
  </svg>
);

const HourglassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <path
      stroke="#0891B2"
      strokeWidth="5"
      d="M49.9 30.2 40 40l-9.9-9.8C20.4 20.6 15.5 15.8 17 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6Z"
    ></path>
    <path
      stroke="#0891B2"
      strokeOpacity="0.5"
      strokeWidth="5"
      d="M30.1 49.8 40 40l9.9 9.8c9.7 9.6 14.6 14.4 13.2 18.6l-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4a7 7 0 0 1-.4-1c-1.4-4.2 3.5-9 13.2-18.6Z"
    ></path>
  </svg>
);

const icons = {
  calendar: <CalendarIcon />,
  bargraph: <BargraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourglassIcon />,
};

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="mb-3 font-medium sm:text-left text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.primary.icons.map((item, index) => (
          <div
            key={index}
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
            <PrismicRichText components={components} field={item.title} />
            <PrismicRichText components={components} field={item.description} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
