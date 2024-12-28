import {
  ArrowUpRight,
  IdCard,
  MessagesSquare,
  MonitorSmartphone,
  PanelTop,
  Search,
  Smartphone,
} from "lucide-react";

import { BlockWrapper } from "@/components/block-wrapper";

const services = [
  {
    id: 1,
    title: "Wizytówki",
    icon: <IdCard className="text-primary" />,
    delay: 500,
  },
  {
    id: 2,
    title: "Strony internetowe",
    icon: <PanelTop className="text-primary" />,
    delay: 700,
  },
  {
    id: 3,
    title: "Aplikacje",
    icon: <Smartphone className="text-primary" />,
    delay: 900,
  },
  {
    id: 4,
    title: "Konsultacje",
    icon: <MessagesSquare className="text-primary" />,
    delay: 500,
  },
  {
    id: 5,
    title: "Responsywność",
    icon: <MonitorSmartphone className="text-primary" />,
    delay: 700,
  },
  {
    id: 6,
    title: "Pozycjonowanie SEO",
    icon: <Search className="text-primary" />,
    delay: 900,
  },
];

export const Services = () => {
  return (
    <BlockWrapper id="services">
      <div
        className="mb-12 grid grid-cols-12 items-center gap-6 2xl:gap-0"
        data-aos="fade-up"
      >
        <div className="col-span-12 lg:col-span-5 xl:col-span-5">
          <div className="flex flex-col flex-wrap gap-y-2 font-syne font-bold leading-none">
            <span className="text-xl text-primary">Usługi</span>
            <h3 className="relative text-4xl tracking-[-1.5px] text-black-800 before:absolute before:left-0 before:top-[2px] before:z-[-1] before:block before:size-[36px] before:rounded-full before:bg-primary lg:text-5xl lg:before:size-[48px] xl:text-[60px] xl:before:size-[60px]">
              Moje specjalizacje
            </h3>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 xl:col-span-7">
          <p className="text-muted-foreground text-lg">
            Tworzę nowoczesne i funkcjonalne strony internetowe dla firm i
            klientów indywidualnych, łącząc wygląd i funkcjonalność, aby
            dostarczać skalowalne i efektywne rozwiązania.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => {
              return (
                <div
                  key={service.id}
                  className="group rounded-lg bg-black-500 px-6 py-7 transition-all hover:bg-background hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <div className="mb-8 flex size-12 flex-wrap items-center justify-center rounded-full bg-background shadow transition-all group-hover:bg-black-500">
                    {service.icon}
                  </div>

                  <h4>
                    <a
                      href="#projects"
                      className="flex flex-wrap items-end justify-between font-syne text-xl font-bold text-black-800 transition-all group-hover:text-primary"
                    >
                      {service.title}
                      <span className="text-black-text-600 group-hover:animate-arrow-move-up group-hover:text-primary">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="col-span-12 xl:col-span-4"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <div className="group flex h-full flex-col flex-wrap justify-between rounded-lg bg-black-800 px-6 py-7">
            <div className="relative flex flex-wrap justify-end">
              <a
                title="hookycode@gmail.com"
                href="mailto:hookycode@gmail.com"
                className="group-hover:animate-arrow-move-up"
              >
                <ArrowUpRight size={80} className="text-primary" />
              </a>
            </div>

            <div className="flex flex-col flex-wrap gap-y-2">
              <span className="text-lg font-normal leading-none text-primary">
                NAPISZ!
              </span>
              <h4 className="font-syne text-xl font-bold leading-none text-white md:text-2xl">
                hookycode@gmail.com
              </h4>
            </div>
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
};
