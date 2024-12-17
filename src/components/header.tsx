import { ArrowUpRight, Menu, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { socials } from "@/globals";

const links = [{ id: 1, name: "Strona główna" }];

export const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-10 w-full xl:pl-12">
      <div className="flex pl-4 xl:pl-0">
        <div className="flex flex-1 items-center justify-between border-b border-black-800/40">
          <a href="/" className="font-syne text-2xl font-bold text-black-800">
            Hooky Code
          </a>

          <a
            href="mailto:hookycode@gmail.com"
            className="group mr-2 flex items-center px-3 py-[6px] font-bold leading-none transition-all duration-300 hover:text-primary"
          >
            Pogadajmy
            <span className="ml-3 inline-block group-hover:animate-arrow-move-up">
              <ArrowUpRight />
            </span>
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            aria-label="Nav"
            className="flex items-center justify-center bg-black-800 px-[38px] py-7 text-background"
          >
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex h-full flex-col justify-between pl-8">
            <div>
              <SheetHeader className="mb-[80px] flex flex-wrap items-center justify-between border-b border-white/40 font-syne">
                <a href="/">
                  <SheetTitle className="text-2xl font-bold text-background">
                    Hooky Code
                  </SheetTitle>
                </a>
                <SheetClose className="bg-primary px-[38px] py-7 text-background">
                  <X />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>

              <nav className="mr-[40px] flex flex-col flex-wrap justify-between">
                <ul>
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className="group border-b border-white/40 py-4"
                    >
                      <a
                        href="/"
                        className="flex flex-wrap items-center justify-between font-syne text-xl font-bold leading-none text-white transition duration-300 group-hover:text-primary"
                      >
                        {link.name}
                        <span className="inline-block group-hover:animate-arrow-move-up">
                          <ArrowUpRight />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <nav className="pb-10">
              <ul className="flex flex-wrap items-center gap-x-4">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.link}
                      title={social.title}
                      className="text-white transition-all duration-300 hover:text-primary"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
