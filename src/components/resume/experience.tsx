const experience = [
  {
    id: 1,
    date: "01/2022 - Teraz",
    company: "Hooky Code",
    position: "Fullstack Developer",
  },
  {
    id: 2,
    date: "01/2022 - Teraz",
    company: "TVN Warner Bros. Discovery",
    position: "Frontend Developer",
  },
];

export const Experience = () => (
  <div>
    <h4 className="mb-6 font-syne text-2xl font-bold text-black-800 lg:text-[32px]">
      Doświadczenie
    </h4>

    <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
      {experience.reverse().map((item) => (
        <div
          key={item.id}
          className="flex flex-col flex-wrap justify-between gap-8 rounded-2xl bg-black-500 px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl"
        >
          <span className="text-sm font-normal leading-tight text-black-text-800">
            {item.date}
          </span>
          <div>
            <p className="relative z-[1] pl-4 text-lg font-normal leading-7 text-black-800 before:absolute before:left-0 before:top-1/2 before:z-[-1] before:block before:size-[8px] before:-translate-y-1/2 before:rounded-full before:bg-primary">
              {item.company}
            </p>
            <h4 className="font-syne text-2xl font-bold leading-normal text-black-800">
              {item.position}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);
