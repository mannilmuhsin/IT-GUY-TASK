import React from "react";
import { Img, Button, Text, Heading } from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePropertycard from "./components/HomePropertycard";

const data = [
  {
    propertyimage: "images/img_rectangle_17_262x394.png",
    propertytitle: "Oak Tree",
    propertylocation: "Mount Collah",
    bedroombutton: "2 Bed",
    bathroombutton: "2 Bath",
    carspacebutton: "1 Car space",
  },
  {
    propertyimage: "images/img_rectangle_17_1.png",
    propertytitle: "Property Name",
    propertylocation: "Location",
    bedroombutton: "2 Bed",
    bathroombutton: "2 Bath",
    carspacebutton: "1 Car space",
  },
  {
    propertyimage: "images/img_rectangle_17_2.png",
    propertytitle: "Property Name",
    propertylocation: "Location",
    bedroombutton: "2 Bed",
    bathroombutton: "2 Bath",
    carspacebutton: "1 Car space",
  },
];

function App() {
  return (
    <>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <Header className="relative flex items-center justify-between  bg-white-A700 p-3 md:flex-col" />

        {/* hero section */}
        <div>
          <div className="flex md:flex-col">
            <div className="relative z-[1] flex h-[720px] flex-1 items-center justify-center bg-[url(/public/images/img_group_5.svg)] md:bg-[url(/public/images/mobile.svg)] bg-cover bg-no-repeat px-14 py-24 md:h-auto  md:p-5">
              <div className="mb-2 flex w-[80%] flex-col items-start md:w-full">
                <Heading
                  size="3xl"
                  as="h1"
                  className="w-full leading-[72px] !text-white-A700"
                >
                  Homes that empower extraordinary lives
                </Heading>
                <Text
                  size="xl"
                  as="p"
                  className="mt-6 w-[95%] !font-gilroymedium leading-8 !text-white-A700 md:w-full"
                >
                  Good Housing provides specialist disability accommodation
                  (SDA) that considers the physical, mental and emotional needs
                  & benefits of the individual.
                </Text>
                <Button
                  color="cyan_600"
                  size="sm"
                  shape="round"
                  className="mt-14 min-w-[223px] sm:w-full font-bold sm:px-5"
                >
                  Explore Our Homes
                </Button>
              </div>
            </div>
            <Img
              src="images/img_rectangle_17.png"
              alt="image"
              className="relative ml-[-88px] sm:mt-[-80px] h-[720px] w-[720px] object-cover md:ml-0 md:w-full"
            />
          </div>

          {/* featured properties section */}
          <div className="flex flex-col items-center justify-center gap-14 bg-white-A700 py-[95px] md:py-5 sm:gap-7">
            <div className="container-xs flex justify-center md:p-5">
              <div className="flex w-full flex-col items-start gap-0.5">
                <Heading size="2xl" as="h2">
                  Take a look at our homes
                </Heading>
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <Text
                    size="xl"
                    as="p"
                    className="self-end !font-gilroymedium"
                  >
                    Designed for better living experiences.
                  </Text>
                  <Button
                    color="cyan_600"
                    size="sm"
                    variant="outline"
                    shape="round"
                    className="min-w-[152px] font-bold sm:hidden"
                  >
                    Explore All
                  </Button>
                </div>
              </div>
            </div>
            <div className="container-xs mb-2 overflow-x-auto flex gap-[25px]  md:p-5">
              {data.map((d, index) => (
                <HomePropertycard
                  {...d}
                  key={"listoaktree" + index}
                  className="flex w-full min-w-[300px] flex-col items-start rounded-[12px] border border-solid border-indigo-900_1e bg-white-A700 pb-6 sm:pb-5"
                />
              ))}
            </div>
            <div className="container px-9">
              <Button
                color="cyan_600"
                size="sm"
                variant="outline"
                shape="round"
                className="w-full font-bold md:block hidden"
              >
                Explore All
              </Button>
            </div>
          </div>

          {/* about us section */}
          <div className="flex justify-center bg-gray-100 py-[104px] md:py-5">
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
              <div className="flex w-[45%] flex-col items-start md:w-full">
                <Heading size="xl" as="h2" className="w-full leading-[56px]">
                  We believe that everybody has the right to have a place that
                  feels like home
                </Heading>
                <Text
                  size="xl"
                  as="p"
                  className="mt-6 w-[94%] !font-gilroymedium leading-8 md:w-full"
                >
                  Good Housing was born out of a family need for specialty
                  housing, and our lived experience means we understand the
                  challenges and requirements in finding the right home.
                </Text>
                <Button
                  color="cyan_600"
                  size="sm"
                  variant="outline"
                  shape="round"
                  className="mt-14 min-w-[144px] font-bold sm:px-5 sm:w-full"
                >
                  Our Story
                </Button>
              </div>
              <Img
                src="images/img_image.png"
                alt="image"
                className="h-[560px] w-[560px] rounded-[12px] object-cover md:w-full"
              />
            </div>
          </div>

          {/* testimonials section */}
          <div className="hidden md:flex flex-col items-center justify-center gap-[68px] bg-white-A700 py-24 md:py-5 sm:gap-[34px]">
            <div className="container-xs items-center gap-[21px] md:p-5">
              <Heading size="2xl" as="h2">
                Good stories
              </Heading>
              <Text size="xl" as="p" className="!font-gilroymedium">
                From Tenants that are empowered.
              </Text>
            </div>

            <div className=" relative mb-[7px] rounded-[12px] mx-5 bg-cyan-600  md:flex md:flex-col">
              <div className="relative md:order-2 bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[92%] md:w-full md:rounded-[12px]">
                <div className="relative ml-[-469px] flex flex-1 flex-col gap-[39px] rounded-[12px] md:ml-0 md:self-stretch">
                  <div className="flex h-[410px] items-end justify-end rounded-[12px]  bg-cover bg-no-repeat p-[23px] md:h-auto sm:p-5">
                    <div className="  flex flex-col items-center mr-24 gap-[59px] sm:gap-[29px]">
                      <Text
                        size="xl"
                        as="p"
                        className="text-center !font-gilroymedium !text-white-A700"
                      >
                        Tenant Name, Property Name
                      </Text>
                      <Button
                        color="white_A700"
                        size="sm"
                        variant="outline"
                        leftIcon={
                          <Img
                            src="images/img_playcircleoutlined.svg"
                            alt="play_circle_outlined"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        className="min-w-[242px] gap-3 rounded-[12px] font-bold "
                      >
                        Play Tenant's Story
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle_21.png"
                    alt="image"
                    className=" z-[2]  w-full rounded-b-[12px]  object-cover"
                  />
                </div>
              </div>

              <Heading
                size="lg"
                as="h3"
                className="md:order-1 md:w-full mx-4 md:text-left !text-white-A700 my-4"
              >
                "After 765 days in the hospital, I thought I was going to die
                there - I had no where to go. I met Sam and we clicked - he got
                me, he understood, there is a light at the end of the tunnel.
                Thank you to everyone at Good Housing, we got there!
              </Heading>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center justify-center gap-[68px] bg-white-A700 py-24 md:py-5 sm:gap-[34px]">
            <div className="container-xs  items-center gap-[21px] md:p-5">
              <Heading size="2xl" as="h2">
                Good stories
              </Heading>
              <Text size="xl" as="p" className="!font-gilroymedium">
                From Tenants that are empowered.
              </Text>
            </div>
            <div className="container-xs relative mb-[7px] h-[664px] rounded-[12px] bg-cyan-600 pr-14 md:p-5 md:pr-5">
              <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[92%] md:relative md:flex-col">
                <Img
                  src="images/img_rectangle_21.png"
                  alt="image"
                  className="relative z-[2] h-[664px] w-[53%] rounded-bl-[12px] rounded-tl-[12px] object-cover md:w-full"
                />
                <div className="relative ml-[-469px] flex flex-1 flex-col  gap-[39px] rounded-[12px] md:ml-0 md:self-stretch">
                  <div className="flex gap-10 rounded-[12px] md:flex-col">
                    <Img
                      src="images/img_vector.svg"
                      alt="vector"
                      className="h-[213px] w-[50%] rounded-[12px] md:w-full"
                    />
                    <Img
                      src="images/img_vector.svg"
                      alt="vector"
                      className="h-[213px] w-[50%] rounded-[12px] md:w-full"
                    />
                  </div>
                  <div className="flex h-[410px] items-end justify-end rounded-[12px] bg-[url(/public/images/img_group_6.svg)] bg-cover bg-no-repeat p-[23px] md:h-auto sm:p-5">
                    <div className="mb-14 mt-[167px] flex flex-col items-center mr-16 gap-[59px] sm:gap-[29px]">
                      <Text
                        size="xl"
                        as="p"
                        className="text-center !font-gilroymedium !text-white-A700"
                      >
                        Tenant Name, Property Name
                      </Text>
                      <Button
                        color="white_A700"
                        size="sm"
                        variant="outline"
                        leftIcon={
                          <Img
                            src="images/img_playcircleoutlined.svg"
                            alt="play_circle_outlined"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        className="min-w-[242px] gap-3 rounded-[12px] font-bold sm:px-5"
                      >
                        Play Tenant’s Story
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Heading
                size="lg"
                as="h3"
                className="absolute right-[5%] top-[12%] m-auto w-[43%] text-center leading-10 !text-white-A700"
              >
                “After 765 days in the hospital, I thought I was going to die
                there - I had no where to go. I met Sam and we clicked - he got
                me, he understood, there is a light at the end of the tunnel.
                Thank you to everyone at Good Housing, we got there! 
              </Heading>
            </div>
          </div>

          {/* news section */}
          <div className="flex justify-center bg-gray-100 py-24 md:py-5">
            <div className="container-xs mb-1.5 flex flex-col gap-14 md:p-5 sm:gap-7">
              <div className="flex items-center justify-between gap-5">
                <Heading size="2xl" as="h2">
                  Good news
                </Heading>
                <Button
                  color="cyan_600"
                  size="sm"
                  variant="outline"
                  shape="round"
                  className=" min-w-[170px] md:hidden self-end font-bold sm:px-5"
                >
                  See All News
                </Button>
              </div>
              <div className="flex  flex-col pb-[49px] md:pb-5">
                <div className="flex flex-1 flex-col gap-[47px]">
                  <div className="h-px bg-indigo-900_26" />
                  <div className="flex items-center justify-between gap-5 ">
                    <div className="flex w-[65%] flex-col items-start md:w-full">
                      <div className="flex flex-wrap items-center gap-3">
                        <Heading
                          as="h3"
                          className="flex items-center justify-center bg-red-300 px-1.5 py-0.5 tracking-[0.80px] !text-white-A700"
                        >
                          SDA NEWS
                        </Heading>
                        <Text as="p" className="!font-gilroymedium">
                          • 23, Oct 2020
                        </Text>
                      </div>
                      <Heading size="lg" as="h4" className="mt-[18px]">
                        Understanding the steps for SDA approval
                      </Heading>
                      <Text
                        size="lg"
                        as="p"
                        className="mt-[23px] md:hidden w-full !font-gilroymedium leading-7"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Semper proin metus tristique facilisi nec eget morbi
                        nulla. Sit justo massa quisque malesuada. Parturient
                        arcu blandit egestas risus faucibus dolor lectus.
                      </Text>
                      <a href="#" className="mt-[41px]">
                        <Heading size="s" as="h5" className="!text-cyan-600">
                          Read More
                        </Heading>
                      </a>
                    </div>
                    <Img
                      src="images/img_image_260x360.png"
                      alt="image"
                      className="h-[260px] sm:h-36 sm:w-44 w-[29%] rounded-[12px] object-cover md:w-full"
                    />
                  </div>
                  <div className="h-px bg-indigo-900_26" />
                </div>
                <div className="h-px  w-full bg-indigo-900_26 " />
                <div className="flex flex-1 flex-col mt-14 gap-12 ">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[65%] flex-col items-start md:w-full ">
                      <div className="flex flex-wrap items-center gap-3">
                        <Heading
                          as="h6"
                          className="flex items-center justify-center bg-cyan-600 px-1.5 py-0.5 tracking-[0.80px] !text-white-A700"
                        >
                          PROPERTY NEWS
                        </Heading>
                        <Text as="p" className="!font-gilroymedium">
                          • 23, Oct 2020
                        </Text>
                      </div>
                      <Heading size="lg" as="h2" className="mt-[18px]">
                        Understanding the steps for SDA approval
                      </Heading>
                      <Text
                        size="lg"
                        as="p"
                        className="mt-[23px] w-full md:hidden !font-gilroymedium leading-7"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Semper proin metus tristique facilisi nec eget morbi
                        nulla. Sit justo massa quisque malesuada. Parturient
                        arcu blandit egestas risus faucibus dolor lectus.
                      </Text>
                      <a href="#" className="mt-[41px]">
                        <Heading size="s" as="h6" className="!text-cyan-600">
                          Read More
                        </Heading>
                      </a>
                    </div>
                    <Img
                      src="images/img_image_1.png"
                      alt="image"
                      className="h-[260px] sm:h-36 sm:w-44 w-[29%] rounded-[12px] object-cover md:w-full"
                    />
                  </div>
                  <div className="h-px bg-indigo-900_26" />
                </div>
                <div className="h-px w-full bg-indigo-900_26" />
                <div className="flex flex-1 items-center justify-between mt-14 gap-5 ">
                  <div className="flex w-[65%] flex-col items-start md:w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      <Heading
                        as="h6"
                        className="flex items-center justify-center bg-orange-A100 px-1.5 py-0.5 uppercase tracking-[0.80px]"
                      >
                        community news
                      </Heading>
                      <Text as="p" className="!font-gilroymedium">
                        • 23, Oct 2020
                      </Text>
                    </div>
                    <Heading size="lg" as="h2" className="mt-[18px]">
                      Understanding the steps for SDA approval
                    </Heading>
                    <Text
                      size="lg"
                      as="p"
                      className="mt-[23px] md:hidden w-full !font-gilroymedium leading-7"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Semper proin metus tristique facilisi nec eget morbi
                      nulla. Sit justo massa quisque malesuada. Parturient arcu
                      blandit egestas risus faucibus dolor lectus.
                    </Text>
                    <a href="#" className="mt-[41px]">
                      <Heading size="s" as="h6" className="!text-cyan-600">
                        Read More
                      </Heading>
                    </a>
                  </div>
                  <Img
                    src="images/img_image_2.png"
                    alt="image"
                    className="h-[260px] sm:h-36 sm:w-44 w-[29%] rounded-[12px] object-cover md:w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* eligibility check section */}
          <div className="flex bg-white-A700 md:flex-col">
            <Img
              src="images/img_group_314.png"
              alt="image"
              className="h-[527px] md:hidden w-[23%] object-cover md:w-full"
            />
            <div className="containe justify-end flex items-end">
              <Img
                src="images/mob_top.svg"
                alt="image"
                className="h-[100px] md:block hidden w-[33%] object-fill "
              />
            </div>

            <div className="flex flex-1  flex-col gap-2 md:self-stretch ">
              <div className="flex justify-between items-center gap-5 md:flex-col">
                <Heading
                  size="2xl"
                  as="h2"
                  className="w-[67%] text-center leading-[64px] md:w-full"
                >
                  Not sure if you’re eligible for Good Housing?
                </Heading>
                <Img
                  src="images/img_group.png"
                  alt="image"
                  className="mb-[72px] md:hidden h-[160px] w-[23%] object-fill md:w-full"
                />
              </div>
              <div className="flex w-[100%] items-start justify-between  md:w-full md:flex-col">
                <div className="flex w-[62%] flex-col items-center px-9 gap-14 md:w-full sm:gap-7">
                  <Text
                    size="xl"
                    as="p"
                    className="w-full text-center !font-gilroymedium leading-8"
                  >
                    There’s only one way to find out. Hit the button below to
                    enquire about Good Housing and we’ll let you know how we can
                    help.
                  </Text>
                  <Button
                    color="cyan_600"
                    size="sm"
                    shape="round"
                    className="min-w-[168px] z-10 sm:mb-[-85px] sm:mt-5 font-bold sm:w-full sm:px-5"
                  >
                    Enquire Now
                  </Button>
                </div>
                <Img
                  src="images/img_group_red_300.png"
                  alt="image"
                  className="h-[287px] md:hidden w-[31%] object-cover   md:w-full"
                />
                <Img
                  src="images/mob_red.svg"
                  alt="image"
                  className="h-[287px] hidden md:block  w-[31%] object-fill   md:w-full"
                />
              </div>
            </div>
          </div>

          {/* collaboration cta section */}
          <div className="relative h-[608px] md:h-auto">
            <div className="h-[527px] w-full bg-white-A700" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-center bg-orange-A100 py-[104px] md:py-5">
              <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[45%] flex-col items-start md:w-full">
                  <Heading size="2xl" as="h2" className="w-full leading-[64px]">
                    Want to collaborate with us for good?
                  </Heading>
                  <Text
                    size="xl"
                    as="p"
                    className="mt-6 w-full !font-gilroymedium leading-8"
                  >
                    Are you a SIL Provider looking to provide better living
                    experience for the people you support? We’d love to talk.
                  </Text>
                  <Button
                    color="cyan_600"
                    size="sm"
                    shape="round"
                    className="mt-14 sm:w-full min-w-[233px] font-bold sm:px-5"
                  >
                    Collaborate With Us
                  </Button>
                </div>
                <Img
                  src="images/img_image_400x560.png"
                  alt="image"
                  className="h-[400px] w-[45%] rounded-[12px] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer className="flex items-end justify-center bg-blue_gray-900 py-[33px] sm:py-5" />
      </div>
    </>
  );
}

export default App;
