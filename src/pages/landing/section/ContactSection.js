import axios from "axios";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "example_name",
    email: "example@email.com",
    subject: "example subject",
    message: "example message",
  });

  const [dataFile, setDataFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setDataFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // used form data to send file
    const formData = new FormData();
    formData.append("file", dataFile);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    const res = await axios.post("http://server.mogiro.site/upload", formData);

    console.log(res.data);
  };

  return (
    <div className="flex justify-center" id="contact">
      <div className="w-11/12 grid grid-cols-12 gap-8 py-20">
        <div className="text-left lg:col-span-4 col-span-12">
          <h5 className="">Layanan Administrasi</h5>
          <h2 className="text-5xl font-[500] mt-4">
            Pusat Informasi & <br />
            <span className="text-primary">Laporan Pendidikan</span>
          </h2>
          <p className="mt-6">
            Portal komunikasi untuk calon siswa, instruktur, dan koordinasi
            antar satuan. Pastikan dokumen yang diunggah sesuai dengan format
            dinas yang berlaku.
          </p>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <input
                  type="text"
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Nama Lengkap & Pangkat"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Email Dinas"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-12">
                <input
                  type="text"
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Perihal (Cth: Pengiriman Tugas / Permohonan Informasi)"
                  name="subject"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-12">
                <textarea
                  className="w-full p-4 bg-dark-100 rounded-3xl"
                  placeholder="Isi Laporan / Pesan..."
                  rows={5}
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-span-12 w-full">
                <label
                  className="mb-2 block w-full p-8 bg-dark-100 rounded-3xl"
                  htmlFor="file_upload"
                >
                  <FaFileUpload className="inline mt-2 mb-2" size={24} />
                  <br />
                  Unggah Dokumen Pendukung
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    name="file_upload"
                    id="file_upload"
                  />
                </label>
              </div>
              <div className="col-span-12">
                <button
                  type="submit"
                  className="w-full p-4 bg-primary rounded-3xl text-dark-100"
                >
                  Kirim Laporan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
