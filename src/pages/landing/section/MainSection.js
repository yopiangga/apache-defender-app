import imageBase from "src/assets/image/base.png";
import imageMe from "src/assets/image/me.jpeg";

export function MainSection() {
  return (
    <div className="flex justify-center min-h-[700px]" id="main">
      <div className="w-11/12 grid grid-cols-12 gap-4 py-20">
        <div className="lg:col-span-4 col-span-12 text-left flex flex-col justify-center">
          <h3 className="text-4xl text-text">Skadron Pendidikan 506</h3>
          <h1 className="text-6xl font-bold mt-6 text-primary">
            Cyber <br />
            Defense Center
          </h1>
          <h2 className="text-2xl mt-8">
            Adaptif | Modern | Profesional | Unggul | Humanis
          </h2>
          <p className="text-lg mt-8">
            Membentuk prajurit TNI Angkatan Udara yang memiliki kualifikasi
            khusus di bidang pertahanan siber, keamanan jaringan, dan teknologi
            informasi guna menghadapi tantangan perang asimetris masa depan.
          </p>
          <div className="flex gap-2 mt-4">
            <a
              href=""
              target="_blank"
              className="bg-primary text-dark-300 font-[500] px-10 py-3 mt-4 hover:bg-dark-100 hover:text-primary duration-200 rounded-xl"
            >
              Profile Satuan
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative lg:flex hidden justify-center items-center">
          {/* <img src={imageBase} alt="profile" /> */}
          <div className="absolute rounded-full overflow-hidden mt-5 w-96 h-96">
            <img src={imageMe} />
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-10 flex items-center justify-center">
          <div className="bg-dark-300 text-left rounded-xl p-6 w-56">
            <div>
              <h4 className="text-4xl text-primary">100+ Std</h4>
              <p className="mt-1">
                Training Hours Per <br /> Person
              </p>
              <div className="h-[0.5px] bg-white mt-4"></div>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl text-primary">Level 5</h4>
              <p className="mt-1">Cyber Threat Level</p>
              <div className="h-[0.5px] bg-white mt-4"></div>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl text-primary">5+ years</h4>
              <p className="mt-1">Experience</p>
              <div className="h-[0.5px] bg-white mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
