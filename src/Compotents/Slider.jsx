const Slider = () => {
  return (
    <div className="carousel  h-[250px] md:h-[300px] lg:h-[350px]  overflow-hidden "> 

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://static.independent.co.uk/2024/10/01/13/Kids-xmas-toys-hero-indybest.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp"
          className="w-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-10 text-white">
          <h2 className="text-4xl font-bold">Remote Car 🚗</h2>
          <p className="mt-2">High speed racing toy</p>
        </div>
        <div className="absolute flex justify-between w-full top-1/2 px-5">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1596464716127-f2a82984de30"
          className="w-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-10 text-white">
          <h2 className="text-4xl font-bold">Teddy Bear 🧸</h2>
          <p className="mt-2">Soft and cute toy</p>
        </div>
        <div className="absolute flex justify-between w-full top-1/2 px-5">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f"
          className="w-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-10 text-white">
          <h2 className="text-4xl font-bold">Robot Toy 🤖</h2>
          <p className="mt-2">Smart AI robot toy</p>
        </div>
        <div className="absolute flex justify-between w-full top-1/2 px-5">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Slider;