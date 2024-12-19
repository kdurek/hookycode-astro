import { ArrowUpRight, Sparkles } from "lucide-react";

import { BlockWrapper } from "@/components/block-wrapper";
import { About } from "@/components/resume/about";
import { Certificates } from "@/components/resume/certificates";
import { Experience } from "@/components/resume/experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Resume = () => (
  <BlockWrapper id="resume" wrapperClassName="bg-muted">
    <Tabs
      defaultValue="about"
      className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px]"
    >
      <div className="col-span-12 lg:col-span-5" data-aos="fade-up">
        <div className="mb-4 flex flex-col flex-wrap font-syne font-bold leading-none">
          <span className="text-xl text-primary">Curriculum Vitae</span>
          <h3 className="relative z-[1] text-4xl tracking-[-1.5px] text-black-800 before:absolute before:left-0 before:top-[2px] before:z-[-1] before:block before:size-[36px] before:rounded-full before:bg-primary lg:text-5xl lg:before:size-[48px] xl:text-[60px] xl:before:size-[60px]">
            Szczegóły znajdziesz tutaj...
          </h3>
        </div>
        <TabsList>
          <TabsTrigger value="about" className="group">
            O mnie
            <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
              <ArrowUpRight />
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="group inline-flex items-center justify-between"
          >
            Doświadczenie
            <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
              <ArrowUpRight />
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="certificates"
            className="group inline-flex items-center justify-between"
          >
            Certyfikaty
            <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
              <ArrowUpRight />
            </span>
          </TabsTrigger>
        </TabsList>
      </div>
      <div
        className="col-span-12 lg:col-span-7"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <TabsContent value="about">
          <About />
          <Sparkles size={48} className="ml-auto mt-14 text-primary" />
        </TabsContent>
        <TabsContent value="experience">
          <Experience />
          <Sparkles size={48} className="ml-auto mt-14 text-primary" />
        </TabsContent>
        <TabsContent value="certificates">
          <Certificates />
          <Sparkles size={48} className="ml-auto mt-14 text-primary" />
        </TabsContent>
      </div>
    </Tabs>
  </BlockWrapper>
);
