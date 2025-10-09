import { useEffect, useState } from "react";
import SectionTitle from "../UI/SectionTitle";

interface CompanyInterface {
  id: number;
  name: string;
  img: string;
  borderColor: string;
  bgColor: string
}

const data: CompanyInterface[] = [
  {
    id: 1,
    name: 'slack',
    img: './slack.svg',
    borderColor: '#FFE7F0',
    bgColor: '#FFF6FA'
  },
  {
    id: 2,
    name: 'medium',
    img: './medium.svg',
    borderColor: '#CAFFE1',
    bgColor: '#EDFFF5'
  },
  {
    id: 3,
    name: 'microsoft',
    img: './microsoft.svg',
    borderColor: '#DDF5FF',
    bgColor: '#F5FCFF'
  },
  {
    id: 4,
    name: 'zeplin',
    img: './zeplin.svg',
    borderColor: '#FFEEC9',
    bgColor: '#FFFBF2'
  },
  {
    id: 5,
    name: 'shopify',
    img: './shopify.svg',
    borderColor: '#DBFFC3',
    bgColor: '#F4FFED'
  },
]

export default function Clients() {
  const [companies, setCompanies] = useState<CompanyInterface[]>([]);

  useEffect(() => {
    setCompanies(data)
  }, []);

  return (
    <section className="mt-25">
      <div className="container">
        <div className="max-w-[140px]">
          <SectionTitle heading="Big deal with">Clients</SectionTitle>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 md:gap-[50px] mt-[44px]">
          {
            companies.length ?
              companies.map((company, i) => (
                <div data-aos="fade-up" data-aos-delay={i * 100}
                  style={{ background: `${company.bgColor}`, borderColor: `${company.borderColor}`, boxShadow: `0 0 30px ${company.borderColor}` }}
                  key={company.id}
                  className={`border w-[170px] h-[170px] rounded-[10px] flex flex-col items-center justify-center gap-[30px]`}>
                  <div>
                    <img src={company.img} alt={company.name} />
                  </div>
                  <p className="text-black capitalize text-center font-medium text-lg">{company.name}</p>
                </div>
              ))
              : <h2 className="text-xl text-black">There is no data!</h2>
          }
        </div>
      </div>
    </section>
  )
}
