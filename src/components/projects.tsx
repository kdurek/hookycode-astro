import { ArrowUpRight } from "lucide-react";

import { BlockWrapper } from "@/components/block-wrapper";

const projects = [
  {
    id: 1,
    title: "POP-MEDIA",
    tags: ["strona"],
    image: "/assets/pop-media.webp",
    link: "https://pop-media.pl",
  },
  {
    id: 2,
    title: "Klinck",
    tags: ["strona"],
    image: "/assets/klinck.webp",
    link: "https://klinck.pl",
  },
];

export const Projects = () => {
  return (
    <BlockWrapper id="projects" wrapperClassName="bg-primary/20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12" data-aos="fade-up">
          <div className="mb-10 flex flex-col flex-wrap gap-y-2 text-center font-syne font-bold leading-none">
            <span className="text-xl text-primary">Portfolio</span>
            <h3 className="text-4xl tracking-[-1.5px] text-black-800 lg:text-5xl xl:text-[64px]">
              Moje najnowsze <br className="md:hidden" />
              <span className="relative before:absolute before:left-[-6px] before:top-[4px] before:z-[-1] before:block before:size-[36px] before:rounded-full before:bg-primary lg:before:size-[48px] xl:before:size-[60px]">
                p
              </span>
              rojekty
            </h3>
          </div>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-12 md:col-span-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="relative mb-6 aspect-video overflow-hidden rounded-[20px]"
            />
            <div className="flex flex-col flex-wrap gap-3">
              {/* <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <a
                      key={tag}
                      className="rounded-[40px] border border-black-text-400 px-4 py-[6px] text-xs font-medium uppercase leading-none text-black-text-800 transition-all hover:border-black-800 hover:bg-black-800 hover:text-white"
                      href="projects.html"
                    >
                      {tag}
                    </a>
                  ))}
                </div> */}
              <div className="group flex flex-wrap items-center justify-between text-black-800 hover:text-primary">
                <h4 className="text-center font-syne text-[20px] font-bold capitalize leading-10 lg:text-[24px] xl:text-[32px]">
                  <a className="transition-all" href={project.link}>
                    {project.title}
                  </a>
                </h4>
                <a
                  className="group-hover:animate-arrow-move-up"
                  href={project.link}
                >
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="col-span-12 mt-12" data-aos="fade-up">
          <div className="group flex">
            <a href="projects.html" className={cn(buttonVariants({ size: 'xl' }), 'w-full')}>
              Zobacz wszystkie projekty
              <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </div> */}
    </BlockWrapper>
  );
};
