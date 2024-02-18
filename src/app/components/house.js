import Image from "next/image";

export default function House() {
  return (
    <div
      className="carousel md:w-1/2 flex m-auto sm:w-full"
      style={{ height: "700px" }}
    >
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="/home/entrance.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny home entrance"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide8" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* 2nd image */}

      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="/home/front.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny home entrance"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* 3rd image */}

      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="/home/main_building.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny apartment room"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* 4th image */}

      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="/home/room1.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny apartment inside room"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* 5th image */}
      <div id="slide5" className="carousel-item relative w-full">
        <Image
          src="/home/room2.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny apartment room"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* 6th image */}
      <div id="slide6" className="carousel-item relative w-full">
        <Image
          src="/home/room3.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny apartment room"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide7" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* 7th image */}
      <div id="slide7" className="carousel-item relative w-full">
        <Image
          src="/home/room4.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny apartment rooms"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide8" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* 8th image */}
      <div id="slide8" className="carousel-item relative w-full">
        <Image
          src="/home/toilet.jpg"
          className="w-full"
          width={500}
          height={500}
          alt="wroclaw glowny apartment toilet"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide7" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
