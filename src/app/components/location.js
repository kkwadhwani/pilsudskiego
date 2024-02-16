import Maps from "./maps";

export default function Location() {
  return (
    <div className="md:flex w-full   sm:flex-col h-auto">
      <div className="sm:w-full  md:w-1/2 h-auto bg-gray-800 pb-9">
        <div className="flex justify-center">
          <div className=" bg-amber-700 w-px h-32"></div>
        </div>
        <div className="flex justify-center">
          <div
            style={{ fontFamily: "initial", fontStyle: "italic" }}
            className="text-center mt-2 mb-2 text-amber-600 text-4xl"
          >
            Near By
          </div>
        </div>

        <div className="text-center  text-amber-50 text-md mt-2 text-am">
          Wroclaw Glowny - 100 meters
        </div>
        <div className="text-center  text-amber-50 text-md mt-5">
          Main Market Square(Rynek) - 1.3 kms
        </div>
        <div className="text-center  text-amber-50 text-md mt-5">
          Wroclaw Cathedral (Cathedral of St. John the Baptist) - 1.7 kms
        </div>
        <div className="text-center  text-amber-50 text-md mt-5">
          Nearest tram stop - 20 meters
        </div>
        <div className="text-center  text-amber-50 text-md mt-5">
          National Museum in Wroclaw (Muzeum Narodowe we Wrocławiu): 1.8 kms
        </div>
        <div className="text-center  text-amber-50 text-md mt-5">
          Wroclaw University Museum (Muzeum Uniwersytetu Wrocławskiego)- 2.3 kms
        </div>
        <div className="text-center  text-amber-50 text-md mt-5">
          Museum of Architecture (Muzeum Architektury) - 2.2 kms
        </div>
      </div>

      <div className="md:w-1/2 sm:w-full h-auto">
        <Maps />
      </div>
    </div>
  );
}
