import { FaLocationArrow } from "react-icons/fa";

export function JobPositionSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] bg-dark-300"
      id="job-position"
    >
      <div className="w-11/12 py-20">
        <div className="text-center">
          <h5 className="">News Update</h5>
          <h2 className="text-5xl font-[500] mt-4">
            Kegiatan
            <span className="text-primary"> Skadik 506</span>
            <br />
            Terkini
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-16">
          <Item
            number="01"
            title="Pembukaan Kursus Dasar Pertahanan Siber (Susparhan Siber) A-II"
            description="Dankodiklatau resmi membuka pendidikan bagi 30 perwira siswa untuk memperkuat kapabilitas pertahanan siber matra udara."
          />
          <Item
            number="02"
            title="Skadik 506 Raih Akreditasi Pelatihan dari BSSN"
            description="Pengakuan standar kualitas kurikulum pendidikan siber TNI AU dalam mencetak talenta digital yang kompeten."
          />
          <Item
            number="03"
            title="Simulasi 'Cyber Warfare': Penanganan Insiden Malware & Ransomware"
            description="Siswa melaksanakan praktik penanggulangan serangan siber pada infrastruktur kritis di Laboratorium Siber Wingdik 500."
          />
          <Item
            number="04"
            title="Kunjungan Kerja KSAU: Modernisasi Fasilitas Pendidikan"
            description="Kepala Staf Angkatan Udara meninjau kesiapan sarana dan prasarana pendidikan berbasis teknologi terbaru."
          />
          <Item
            number="05"
            title="Integrasi AI dalam Kurikulum Deteksi Ancaman Dini"
            description="Penerapan Machine Learning untuk analisis pola serangan siber secara real-time."
          />
          <Item
            number="06"
            title="Seleksi Masuk Pendidikan Kualifikasi Khusus Siber TA 2026"
            description="Informasi persyaratan dan jadwal seleksi bagi personel yang berminat mengikuti pendidikan spesialisasi siber."
          />
        </div>
      </div>
    </div>
  );
}

function Item({ number, title, description }) {
  return (
    <div className="bg-dark-100 p-8 flex gap-4 lg:col-span-6 col-span-12 rounded-xl justify-between">
      <div>
        <h3 className="text-2xl">{number}</h3>
      </div>
      <div className="text-left grow">
        <h3 className="text-2xl font-[500]">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="rounded-full p-4 bg-dark-300 flex justify-center items-center hover:text-primary">
          <FaLocationArrow size={14} />
        </div>
      </div>
    </div>
  );
}
