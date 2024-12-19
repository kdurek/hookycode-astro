import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/globals";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative bg-primary/20 pb-[125px] pt-[140px]">
      <div className="container">
        <div className="grid grid-cols-1 2xl:-mx-4">
          <div className="xl:pt-12">
            <span
              className="mb-3 flex flex-wrap items-center font-syne text-2xl font-bold leading-none text-black-800 lg:text-[32px]"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <span className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="2"
                  viewBox="0 0 65 2"
                  fill="none"
                >
                  <path d="M0 1H65" stroke="#080808" />
                </svg>
              </span>
              Cześć, jestem
            </span>
            <h1
              className="relative z-[1] font-syne text-[60px] font-bold leading-[64px] text-black-800 before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:size-[70px] before:rounded-full before:bg-primary lg:text-[100px] lg:leading-[80px] lg:before:size-[85px] xl:text-[120px] xl:leading-[90px] xl:before:size-[100px] 2xl:text-[140px] 2xl:leading-[110px] 2xl:before:size-[120px]"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Krzysztof
            </h1>
            <h2
              className="mb-[20px] font-syne text-[60px] font-bold leading-[64px] text-black-800 lg:text-[100px] lg:leading-[80px] xl:text-[120px] xl:leading-[90px] 2xl:text-[140px] 2xl:leading-[110px]"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Durek
            </h2>
            <p
              className="mb-[30px] font-syne text-lg font-bold leading-tight text-black-700 md:text-xl xl:text-2xl"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              Full Stack Developer | Polska
            </p>

            <div className="mb-[50px] flex flex-wrap md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
              <span data-aos="fade-right" data-aos-delay="1000">
                <a
                  href="mailto:hookycode@gmail.com"
                  className={cn(
                    buttonVariants({
                      size: "xl",
                    }),
                    "mr-2 group"
                  )}
                >
                  Pogadajmy
                  <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
                    <ArrowUpRight />
                  </span>
                </a>
              </span>
              <span data-aos="fade-right" data-aos-delay="1200">
                <a
                  href="#projects"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "xl",
                    }),
                    "group"
                  )}
                >
                  Moje projekty
                  <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
                    <ArrowUpRight />
                  </span>
                </a>
              </span>
            </div>

            <div
              className="flex flex-wrap items-center"
              data-aos="fade-right"
              data-aos-delay="1400"
            >
              <div className="flex flex-wrap items-center">
                <span className="font-syne text-lg font-bold text-black-700">
                  Sprawdź mnie
                </span>
                <span className="mx-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="14"
                    viewBox="0 0 2 14"
                    fill="none"
                  >
                    <path d="M1 0L1 14" stroke="#080808" strokeOpacity="0.4" />
                  </svg>
                </span>
              </div>
              <ul className="flex flex-wrap items-center gap-x-4">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.link}
                      title={social.title}
                      className="text-black-800 transition-colors duration-500 hover:text-primary"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            className="object-cover absolute bottom-0 right-0 size-full max-h-[80%] md:max-w-[460px] lg:max-w-[580px] xl:max-w-[650px]"
            data-aos="fade-left"
            src="/avatar.svg"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};
