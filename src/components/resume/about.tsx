const about = [
  {
    id: 1,
    key: "Imię",
    value: "Krzysztof",
  },
  {
    id: 2,
    key: "Nazwisko",
    value: "Durek",
  },
  {
    id: 3,
    key: "Email",
    value: "kontakt@hookycode.pl",
  },
  {
    id: 4,
    key: "Doświadczenie",
    value: "3+ lat",
  },
  {
    id: 5,
    key: "Język",
    value: "Polski, Angielski",
  },
];

export const About = () => (
  <div className="grid grid-cols-1">
    <h4 className="mb-10 font-syne text-2xl font-bold text-black-800 lg:text-[32px]">
      Stwórzmy razem stronę internetową, która przyciągnie klientów
    </h4>
    <p className="mb-7 text-lg text-black-text-800">
      Oferuję usługi tworzenia nowoczesnych i funkcjonalnych stron
      internetowych, które skutecznie wspierają rozwój Twojego biznesu.
      Specjalizuję się w tworzeniu stron dopasowanych do Twoich potrzeb - od
      prostych wizytówek po zaawansowane serwisy.
    </p>
    <p className="mb-14 text-lg text-black-text-800">
      Priorytetem jest dla mnie wydajność, responsywność oraz intuicyjność,
      dzięki czemu Twoja strona będzie działać niezawodnie na każdym urządzeniu.
      Stawiam na solidne rozwiązania techniczne, które zapewniają stabilność i
      łatwą rozbudowę w przyszłości.
    </p>

    <ul className="inline-flex flex-col gap-6 md:gap-3">
      {about.map((item) => (
        <li
          key={item.key}
          className="inline-flex flex-col items-start md:flex-row md:items-center md:gap-10"
        >
          <span className="w-[110px] text-lg font-normal leading-none text-black-text-800">
            {item.key}
          </span>
          <span className="font-syne text-2xl font-bold leading-8 text-black-800">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
