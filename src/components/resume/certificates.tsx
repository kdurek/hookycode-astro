const certificates = [
  {
    id: 1,
    logo: "/assets/epic-react.svg",
    company: "Epic React",
    title: "React",
  },
  {
    id: 2,
    logo: "/assets/info-share.svg",
    company: "infoShare Academy",
    title: "GO",
  },
  {
    id: 3,
    logo: "/assets/info-share.svg",
    company: "infoShare Academy",
    title: "AI: Machine Learning",
  },
];

export const Certificates = () => (
  <div>
    <h4 className="mb-6 font-syne text-2xl font-bold text-black-800 lg:text-[32px]">
      Certyfikaty
    </h4>
    <div className="grid grid-cols-1 gap-6">
      {certificates.reverse().map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start gap-[30px] rounded-2xl bg-black-500 px-7 pb-7 pt-[30px] transition-all hover:bg-white hover:shadow-2xl md:flex-row md:gap-[60px] lg:gap-[104px]"
        >
          {/* <span className="text-sm font-normal leading-tight text-black-text-800">{item.date}</span> */}
          <img
            src={item.logo}
            alt={item.company}
            className="relative h-12 w-32 md:h-full md:w-40"
          />
          <div className="flex-1">
            <p className="relative z-[1] pl-4 text-lg font-normal leading-7 text-black-800 before:absolute before:left-0 before:top-1/2 before:z-[-1] before:block before:size-[8px] before:-translate-y-1/2 before:rounded-full before:bg-primary">
              {item.company}
            </p>
            <h4 className="font-syne text-2xl font-bold leading-normal text-black-800">
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);
