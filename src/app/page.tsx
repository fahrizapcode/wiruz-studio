"use client";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const handleClick = () => {
    window.open(
      "https://wa.me/6283890518728?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda",
      "_blank"
    );
  };
  return (
    <div className="bg-[#eff3f4]">
      <header className="sm:p-5 sm:px-8 flex justify-between items-center h-[12vh]">
        <Image
          src={`/wiruz-studio/logo.png`}
          width={120}
          height={120}
          alt="logo"
        />
        <nav className="px-8 hidden font-[500] text-lg font-sans w-[35%] justify-between min-w-[400px] md:flex">
          <a
            className="cursor-pointer hover:font-[600] active:opacity-20"
            href="#about-us"
          >
            Tentang Kami
          </a>
          <a
            className="cursor-pointer hover:font-[600] active:opacity-20"
            href="#our-services"
          >
            Layanan
          </a>
          <a
            className="cursor-pointer hover:font-[600] active:opacity-20"
            href="#portfolio"
          >
            Portofolio
          </a>
        </nav>
      </header>
      <div className="flex flex-col-reverse md:flex-row sm:pt-10 w-[100%] sm:px-8 justify-end sm:justify-between h-[88vh]">
        <div className="flex flex-col w-[100%] md:w-[50%] gap-y-4 pt-2 sm:pt-10 pl-4">
          <h1 className="font-sans font-semibold text-2xl sm:text-4xl lg:text-5xl">
            Desain Kreatif, Website Keren, Harga Bersahabat
          </h1>
          <p className="font-sans text-md lg:text-lg">
            Solusi digital all-in-one untuk UI/UX, branding, dan website
            development. bikin bisnis kamu terlihat profesional tanpa bikin
            kantong jebol
          </p>
          <button
            className="bg-[#1572ff] py-2.5 w-58 text-white cursor-pointer hover:opacity-80 active:opacity-20 rounded-sm text-lg font-sans"
            onClick={handleClick}
          >
            Konsultasi Sekarang
          </button>
        </div>
        <Image
          src="/headline.png"
          width={580}
          height={580}
          alt="headline"
          className="w-[330px] h-[350px] sm:w-[350px] sm:h-[400px] md:w-[500px] md:h-[550px] flex self-center"
        />
      </div>
      <div className="bg-white h-[100vh]" id="about-us">
        <div className="pt-16 md:pt-16 px-10 md:p-0">
          <h1 className="font-semibold text-2xl md:text-4xl text-center font-sans">
            Desain Keren, Website Fungsional, Harga Bersahabat
          </h1>
          <p className="text-center font-sans text-sm md:text-xl">
            Kami percaya setiap orang berhak tampil profesional tanpa harus
            keluar biaya mahal.
          </p>
        </div>
        <div className="flex lg:px-[10%] pt-14">
          <div className="flex justify-center w-[100%]">
            <div className="grid grid-cols-2 gap-3 w-140 p-4">
              <div className="p-1 flex flex-col gap-y-1 hover:bg-gray-100 rounded-md p-4">
                <Image
                  src="/allinone.png"
                  width={60}
                  height={60}
                  alt="All in One"
                />
                <h1 className="font-sans text-sm md:text-xl font-semibold">
                  All-in-One Service
                </h1>
                <p className="font-sans text-xs md:text-sm">
                  Dari desain logo, branding, UI/UX, sampai website — semua bisa
                  di satu tempat.
                </p>
              </div>
              <div className="p-1 flex flex-col gap-y-1 hover:bg-gray-100 rounded-md p-4">
                <Image
                  src="/creative.png"
                  width={63}
                  height={63}
                  alt="Creative"
                />
                <h1 className="font-sans text-sm md:text-xl font-semibold">
                  Kreatif & Fleksibel
                </h1>
                <p className="font-sans text-xs md:text-sm">
                  Ide segar, santai, dan mudah menyesuaikan dengan kebutuhanmu.
                </p>
              </div>
              <div className="p-1 flex flex-col gap-y-1 hover:bg-gray-100 rounded-md p-4">
                <Image src="/price.png" width={60} height={60} alt="Price" />
                <h1 className="font-sans text-sm md:text-xl font-semibold">
                  Harga Bersahabat
                </h1>
                <p className="font-sans text-xs md:text-sm">
                  Layanan premium dengan biaya yang tetap ramah di kantong.
                </p>
              </div>
              <div className="p-1 flex flex-col gap-y-1 hover:bg-gray-100 rounded-md p-4">
                <Image
                  src="/trusted.png"
                  width={60}
                  height={60}
                  alt="All in One"
                />
                <h1 className="font-sans text-sm md:text-xl font-semibold">
                  Kualitas Terjamin
                </h1>
                <p className="font-sans text-xs md:text-sm">
                  Hasil desain dan website rapi, modern, dan sesuai standar
                  industri.
                </p>
              </div>
            </div>
            <Image
              src="/about-us.png"
              width={300}
              height={500}
              alt="About us"
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
      <div id="our-services" className="min-h-[100vh] pb-10 md:pb-0">
        <header className="py-14">
          <p className="font-sans text-3xl md:text-4xl font-semibold text-center">
            Layanan Kami
          </p>
        </header>
        <div className="flex justify-center">
          <div className="grid w-[90%] md:grid-cols-3 md:w-220 pt-10 md:pt-18 gap-18 md:gap-5">
            <div className="bg-white flex flex-col items-center p-4 py-8 pt-16 rounded-md relative gap-y-3 justify-between">
              <Image
                width={145}
                height={145}
                alt="ui-ux"
                src="/ui-ux-service.png"
                className="absolute top-[-70px]"
              />
              <h1 className="text-2xl font-semibold font-sans text-center">
                UI/UX Design
              </h1>
              <p className="text-center font-sans text-md">
                Kami membantu Anda menciptakan pengalaman pengguna yang mudah
                dipahami, nyaman, dan estetik melalui wireframe, prototype, dan
                desain interaktif yang profesional.
              </p>
              <button
                className="p-1.5 px-3 bg-[#1572ff] text-white rounded-sm hover:opacity-80 active:opacity-20 cursor-pointer"
                onClick={handleClick}
              >
                Konsultasi
              </button>
            </div>
            <div className="bg-white flex flex-col items-center p-4 py-8 pt-16 rounded-md relative gap-y-3">
              <Image
                width={145}
                height={145}
                alt="web"
                src="/web-service.png"
                className="absolute top-[-70px]"
              />
              <h1 className="text-2xl font-semibold font-sans text-center">
                Website Development
              </h1>
              <p className="text-center font-sans text-md">
                Bangun kehadiran online yang kuat dengan website profesional,
                mobile-friendly, dan siap membantu bisnis Anda berkembang di era
                digital.
              </p>
              <button
                className="p-1.5 px-3 bg-[#1572ff] text-white rounded-sm hover:opacity-80 active:opacity-20 cursor-pointer"
                onClick={handleClick}
              >
                Konsultasi
              </button>
            </div>
            <div className="bg-white flex flex-col items-center p-4 py-8 pt-16 rounded-md relative gap-y-3">
              <Image
                width={145}
                height={145}
                alt="branding"
                src="/branding-service.png"
                className="absolute top-[-70px]"
              />
              <h1 className="text-2xl font-semibold font-sans text-center">
                Branding & Desain Grafis
              </h1>
              <p className="text-center font-sans text-md">
                Dari logo hingga materi promosi, kami menghadirkan desain yang
                konsisten dan kreatif untuk memperkuat identitas merek Anda.
              </p>
              <button
                className="p-1.5 px-3 bg-[#1572ff] text-white rounded-sm hover:opacity-80 active:opacity-20 cursor-pointer"
                onClick={handleClick}
              >
                Konsultasi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] pb-10 bg-white" id="portfolio">
        <header className="w-[100%] py-15">
          <p className="text-center font-sans text-2xl md:text-4xl font-semibold">
            Proyek yang Pernah Kami Kerjakan
          </p>
        </header>
        <div className=" flex justify-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 px-[6%] sm:px-[16%] md:px-[10%] lg:px-0 lg:grid-cols-3 gap-4 w-260">
            <ProjectCard
              title="Portal Akademik Informatika UIN"
              caption="Sistem Pengelolaan Event dan Materi Belajar Jurusan Teknik Informatika Universitas Islam Negeri Sunan Gunung Djati Bandung"
              srcImage="/project-himatif.png"
              tag={["UI UX"]}
            />
            <ProjectCard
              title="Jaringan Kegiatan Mahasiswa"
              caption="Sistem Manajemen Kegiatan Mahasiswa Universitas"
              srcImage="/project-jarkam.png"
              tag={["UI UX", "Website"]}
            />
            <ProjectCard
              title="PajanganQ"
              caption="Aplikasi Website Pengelolaan Produk berbasis Katalog Etalase"
              srcImage="/project-pajanganQ.png"
              tag={["UI UX", "Website"]}
            />
            <ProjectCard
              title="Green Trend"
              caption="Aplikasi Sosial Media Positif Trend berbasis Mobile"
              srcImage="/project-gtrend.png"
              tag={["UI UX"]}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#CBD5E1] flex flex-col items-center gap-y-6 py-10 pb-14">
        <Image width={120} height={120} alt="wiruz" src="/logo.png" />
        <p className="font-sans font-medium text-xl md:text-3xl text-black w-[90%] md:w-[70%] lg:w-[50%] text-center">
          Siap wujudkan proyek desain & website Anda? Hubungi kami sekarang
        </p>
        <button
          className="bg-white py-2.5 w-58 cursor-pointer hover:opacity-80 active:opacity-20 rounded-sm text-lg font-medium font-sans"
          onClick={handleClick}
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
