import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  propertyimage?: string;
  propertytitle?: string;
  propertylocation?: string;
  bedroombutton?: string;
  bathroombutton?: string;
  carspacebutton?: string;
}

export default function HomePropertycard({
  propertyimage = "images/img_rectangle_17_262x394.png",
  propertytitle = "Oak Tree",
  propertylocation = "Mount Collah",
  bedroombutton = "2 Bed",
  bathroombutton = "2 Bath",
  carspacebutton = "1 Car space",
  ...props
}: Props) {
  const isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed

  const getButtonContent = (buttonText: string) => {
    if (isMobileView) {
      // Extract the number from the button text
      const count = parseInt(buttonText.split(" ")[0]);
      return count.toString(); // Only show the count
    } else {
      return buttonText; // Show the full text
    }
  };

  return (
    <div {...props}>
      <Img
        src={propertyimage}
        alt="oak_tree"
        className="h-[262px] w-full rounded-tl-[12px] rounded-tr-[12px] object-cover md:h-auto"
      />
      <Heading size="md" as="h4" className="ml-6 mt-[23px]">
        {propertytitle}
      </Heading>
      <Text size="xl" as="p" className="ml-6 mt-1.5 !font-gilroymedium">
        {propertylocation}
      </Text>
      <div className="mt-5 flex w-[86%] gap-2 self-center">
        <Button
          shape="round"
          leftIcon={
            <Img
              src="images/img_bed.svg"
              alt="bed"
              className="h-[24px] w-[24px]"
            />
          }
          className="w-full flex-1 gap-2 !rounded-md font-gilroymedium"
        >
          {getButtonContent(bedroombutton)}
        </Button>
        <Button
          shape="round"
          leftIcon={
            <Img
              src="images/img_bath.svg"
              alt="bath"
              className="h-[24px] w-[24px]"
            />
          }
          className="w-full flex-1 gap-2 !rounded-md font-gilroymedium"
        >
          {getButtonContent(bathroombutton)}
        </Button>
        <Button
          shape="round"
          leftIcon={
            <Img
              src="images/img_car.svg"
              alt="car"
              className="h-[24px] w-[24px] "
            />
          }
          className="min-w-[90px] gap-2 !rounded-md font-gilroymedium"
        >
          {getButtonContent(carspacebutton)}
        </Button>
      </div>
    </div>
  );
}
