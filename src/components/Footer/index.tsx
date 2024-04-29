import React from "react";
import { Text, Img, Input, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="container-xs mt-[46px] flex flex-col gap-20 md:gap-[60px] md:p-5 sm:gap-10">
        <div className="flex sm:mt-10 items-start md:flex-col">
          <Img
            src="images/img_footer_logo.png"
            alt="footerlogo"
            className="h-[80px] w-[163px] sm:my-16 object-cover"
          />
          <div className="ml-[102px] md:block flex  items-center justify-between gap-5 md:ml-0 md:self-stretch">
            <div className="flex flex-col items-start gap-6">
              <Heading
                as="h6"
                className="uppercase tracking-[0.80px] !text-white-A700"
              >
                company
              </Heading>
              <ul className="flex flex-col items-start gap-4">
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      Our Story
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      How We Build
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      Our Good Homes
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      Good News
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      Good Press
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      Collaborate With Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-white-A700_99">
                      Enquire Now
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:mt-10 items-start gap-6">
              <Heading
                as="h6"
                className="uppercase tracking-[0.80px] !text-white-A700"
              >
                Support
              </Heading>
              <ul className="flex flex-col items-start">
                <li>
                  <a href="FAQ" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-white-A700_99">
                      FAQ
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-4">
                    <Text as="p" className="!text-white-A700_99">
                      Contact Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="mt-[50px]">
                    <Heading
                      as="h6"
                      className="uppercase tracking-[0.80px] !text-white-A700"
                    >
                      Follow us
                    </Heading>
                  </a>
                </li>
                <li>
                  <a
                    href="Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-[26px]"
                  >
                    <Text as="p" className="!text-white-A700_99">
                      Instagram
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-[15px]"
                  >
                    <Text as="p" className="!text-white-A700_99">
                      Facebook
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4"
                  >
                    <Text as="p" className="!text-white-A700_99">
                      LinkedIn
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-[185px] flex flex-1 flex-col items-start md:ml-0 md:self-stretch">
            <a href="#">
              <Heading
                as="h6"
                className="uppercase tracking-[0.80px] !text-white-A700"
              >
                subscribe to our newsletter
              </Heading>
            </a>
            <Input
              shape="round"
              name="email"
              placeholder={`Enter your email address`}
              className="mt-[25px] sm:pr-5"
            />
            <div className="mt-[62px] flex w-[85%] items-center justify-center gap-5 md:w-full">
              <Img
                src="images/img_coat.svg"
                alt="coat"
                className="h-[74px] w-[32%]"
              />
              <Img
                src="images/img_vector_white_a700.svg"
                alt="vector"
                className="h-[74px] w-px"
              />
              <Img
                src="images/img_shield.png"
                alt="shield"
                className="h-[74px] w-[73px] object-cover"
              />
              <Img
                src="images/img_words.svg"
                alt="words"
                className="mt-[13px] h-[47px] w-[34%] self-start"
              />
            </div>
            <Text
              size="xs"
              as="p"
              className="mt-4 w-[72%] !font-gilroymedium leading-5 !text-white-A700 md:w-full"
            >
              Registered with the NDIS Quality and Safeguards Commission
              (4-BTO9C70)
            </Text>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="h-px bg-white-A700_3f" />
            <div className="flex justify-between gap-5 sm:flex-col">
              <Text
                size="s"
                as="p"
                className="!font-gilroymedium !text-white-A700_7f"
              >
                Copyright © 2020 Good Housing - All Rights Reserved.
              </Text>
              <div className="flex flex-col">
                <Text
                  size="s"
                  as="p"
                  className="relative z-[3] flex text-right !font-gilroymedium !text-white-A700_7f"
                >
                  <span className="text-white-A700_7f">
                    Website made by&nbsp;
                  </span>
                  <a href="#" className="text-white-A700 underline">
                    Relume
                  </a>
                </Text>
                <Text
                  size="s"
                  as="p"
                  className="relative mt-[-16px] flex text-right !font-gilroymedium !text-white-A700_7f"
                >
                  <span className="text-white-A700_7f">
                    Website made by&nbsp;
                  </span>
                  <a href="#" className="text-white-A700 underline">
                    Relume
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
