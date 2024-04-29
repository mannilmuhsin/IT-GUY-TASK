import React from "react";
import MegaMenu1 from "../MegaMenu1";
import { Spin as Hamburger } from "hamburger-react";
import { Button, Text, Img } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header {...props}>
      <div className="ml-7 flex w-[37%] items-center justify-between gap-5 md:ml-0 md:w-full ">
        <Img
          src="images/img_header_logo.png"
          alt="headerlogo"
          className="h-[64px] w-[130px] object-cover"
        />
        <div className="hidden sm:flex">
          <Hamburger />
        </div>
        <ul className="md:hidden flex gap-8">
          <li>
            <a href="#">
              <Text size="lg" as="p" className="text-right">
                Our Homes
              </Text>
            </a>
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className=" flex cursor-pointer items-center gap-1">
              <Text size="lg" as="p">
                About
              </Text>
              <Img
                src="images/img_arrow_down.svg"
                alt="arrowdown"
                className="h-[20px] w-[20px]"
              />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
          <li>
            <a href="#">
              <Text size="lg" as="p" className="text-right">
                Good News
              </Text>
            </a>
          </li>
        </ul>
      </div>
      <div className="mr-7 flex gap-4 md:mr-0">
        <Button
          color="cyan_600"
          size="sm"
          variant="outline"
          shape="round"
          className=" md:hidden block min-w-[233px] font-bold sm:px-5"
        >
          Collaborate With Us
        </Button>
        <Button
          color="cyan_600"
          size="sm"
          shape="round"
          className="md:hidden block min-w-[168px] font-bold sm:px-5"
        >
          Enquire Now
        </Button>
      </div>
    </header>
  );
}
