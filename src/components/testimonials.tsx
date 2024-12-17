import { BlockWrapper } from "@/components/block-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    text: "Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services",
    author: "POP-MEDIA",
  },
  {
    id: 2,
    text: "Energistically build Unleash energistically build alternative scenarios via cross-unit build efficient initiatives for distinctive vortals. Synergistically strategize via adaptiv",
    author: "Klinck",
  },
  {
    id: 3,
    text: "Energistically build Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.",
    author: "Jhon Smith",
  },
  {
    id: 4,
    text: "Energistically build Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.",
    author: "Jhon Smith",
  },
  {
    id: 5,
    text: "Energistically build Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.",
    author: "Jhon Smith",
  },
  {
    id: 6,
    text: "Energistically build Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.",
    author: "Jhon Smith",
  },
];

export const Testimonials = () => {
  return (
    <BlockWrapper
      id="testimonials"
      className="3xl:gap-x-[165px] flex flex-col gap-x-[55px] 2xl:flex-row 2xl:gap-x-[100px]"
    >
      <div className="mb-10 flex flex-col flex-wrap gap-y-2 font-syne font-bold leading-none md:text-center xl:text-left">
        <span className="text-xl text-primary">Referencje</span>
        <h3 className="inline-block text-4xl tracking-[-1.5px] text-black-800 lg:text-5xl xl:text-[64px]">
          <span className="relative z-[1] before:absolute before:left-[-2px] before:top-[4px] before:z-[-1] before:block before:size-[36px] before:rounded-full before:bg-primary lg:before:size-[48px] xl:before:size-[60px]">
            Opinie{" "}
          </span>
          <br className="hidden xl:inline-block" />
          klientów
        </h3>
      </div>

      <Carousel className="-mx-4 md:mx-0">
        <CarouselContent className="mx-4 md:-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-4/5 cursor-pointer first:pl-0 md:basis-1/3 md:first:pl-4"
            >
              <span className="mb-5 inline-block sm:mb-8">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.75 13.5L21.75 30C21.7475 32.3862 20.7985 34.6739 19.1112 36.3612C17.4239 38.0485 15.1362 38.9975 12.75 39C12.3522 39 11.9706 38.842 11.6893 38.5607C11.408 38.2794 11.25 37.8978 11.25 37.5C11.25 37.1022 11.408 36.7206 11.6893 36.4393C11.9706 36.158 12.3522 36 12.75 36C14.3413 36 15.8674 35.3679 16.9926 34.2426C18.1179 33.1174 18.75 31.5913 18.75 30V28.5H7.5C6.70435 28.5 5.94129 28.1839 5.37868 27.6213C4.81607 27.0587 4.5 26.2956 4.5 25.5L4.5 13.5C4.5 12.7044 4.81607 11.9413 5.37868 11.3787C5.94129 10.8161 6.70435 10.5 7.5 10.5L18.75 10.5C19.5456 10.5 20.3087 10.8161 20.8713 11.3787C21.4339 11.9413 21.75 12.7044 21.75 13.5ZM40.5 10.5H29.25C28.4544 10.5 27.6913 10.8161 27.1287 11.3787C26.5661 11.9413 26.25 12.7044 26.25 13.5L26.25 25.5C26.25 26.2956 26.5661 27.0587 27.1287 27.6213C27.6913 28.1839 28.4544 28.5 29.25 28.5H40.5V30C40.5 31.5913 39.8679 33.1174 38.7426 34.2426C37.6174 35.3679 36.0913 36 34.5 36C34.1022 36 33.7206 36.158 33.4393 36.4393C33.158 36.7206 33 37.1022 33 37.5C33 37.8978 33.158 38.2794 33.4393 38.5607C33.7206 38.842 34.1022 39 34.5 39C36.8862 38.9975 39.1739 38.0485 40.8612 36.3612C42.5485 34.6739 43.4975 32.3862 43.5 30V13.5C43.5 12.7044 43.1839 11.9413 42.6213 11.3787C42.0587 10.8161 41.2957 10.5 40.5 10.5Z"
                    fill="#080808"
                    fillOpacity="0.9"
                  />
                </svg>
              </span>
              <p className="mb-4 select-none font-syne text-[16px] font-bold leading-7 text-black-text-800 sm:text-lg xl:text-xl">
                “{testimonial.text}”
              </p>
              <h4 className="flex flex-wrap items-center gap-4 font-syne text-[16px] font-extrabold leading-7 text-black-800 sm:text-lg">
                <span>
                  <svg
                    width="48"
                    height="2"
                    viewBox="0 0 48 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1H48" stroke="#080808" strokeOpacity="0.4" />
                  </svg>
                </span>
                {testimonial.author}
              </h4>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </BlockWrapper>
  );
};
