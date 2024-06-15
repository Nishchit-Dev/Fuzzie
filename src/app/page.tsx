import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/global/3d-card-container";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4d4d4d] bg-[#1f1f1f] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-[0_14px_50px_-5px] hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start for Free from today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate your work with Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px] "
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>

      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ="50"
              >
                Hobby
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ={"60"}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get glimpse of what our software is capable of just a heads up{" "}
                {"you'll"} never leavse us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 task per months
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-md test-xs font-normal dark:text-white"
                >
                  Try Now
                </CardItem>

                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 rounded-md bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ={50}
              >
                Pro plan
                <h2 className="text-6xl">$49</h2>
              </CardItem>
              <CardItem className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300" translateZ={60}>
                Get glimpse of what our software is capable of just a heads up{" "}
                {"you'll"} never leavse us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                      <CheckIcon/> 10 free Automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon/> 10x hobby task per months
                  </li>
                  <li className="flex items-center gap-2">
                        <CheckIcon/> its gaps of gap-4
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                  <CardItem as={"button"} translateZ={20} className="px-4 py-2 rounded-md text-xs font-normal dark:text-white">
                      Try now
                  </CardItem>
                  <CardItem as={"button"} className="px-4 py-2 rounded-md bg-black dark:bg-white dark:text-black text-xs font-bold" translateZ={20} >
                      Get Started now
                  </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ="50"
              >
                Unlimeted Plan
                <h2 className="text-6xl">$99</h2>
              </CardItem>
              <CardItem
                translateZ={"60"}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get glimpse of what our software is capable of just a heads up{" "}
                {"you'll"} never leavse us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 task per months
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-md test-xs font-normal dark:text-white"
                >
                  Try Now
                </CardItem>

                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 rounded-md bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
