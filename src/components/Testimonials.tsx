import SectionTitle from "../UI/SectionTitle";
import Slider from "./Slider";

export default function Testimonials() {
  return (
    <section className="mt-[50px] py-[50px] bg-[url(./slider-bg.svg)] bg-contain bg-bottom">
      <div className="container">
        <div className="max-w-[217px]" data-aos="fade-up" data-aos-delay={100}>
          <SectionTitle heading="What People Says">Testimonials</SectionTitle>
        </div>

        <div className="mt-25 py-10">
          <Slider />
        </div>
      </div>
    </section>
  );
}
