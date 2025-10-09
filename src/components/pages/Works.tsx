export default function Works() {
  return (
    <section>
      <div className="container">
        <div className="h-screen flex flex-col justify-center items-center gap-5">
          <h1 data-aos="fade-up" className="capitalize text-5xl text-black">
            {location.pathname.slice(1)} page
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl text-black"
          >
            Coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
