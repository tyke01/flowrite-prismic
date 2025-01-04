import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

import { createClient } from "@/prismicio";
import Logo from "@/components/logo";
import Bounded from "@/components/bounded";

const Footer = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return (
    <Bounded as={"footer"} >
      <div className="flex sm:flex-row flex-col gap-6 items-center justify-between">
        
          <Link href="/">
            <Logo />
          </Link>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex">
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Footer;
