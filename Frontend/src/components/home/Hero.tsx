import { Link } from "react-router-dom";

const hero = () => {
  interface ImageItem {
    src: string;
    class: string;
  }

  const images: ImageItem[] = [
    {
      src: "pdfImage",
      class: "-top-10 left-16 md:-top-12 md:left-24 md:w-6",
    },
    {
      src: "documentImage",
      class: "-top-3 left-44 md:-top-2 md:left-60 md:w-5",
    },
    {
      src: "imgImage",
      class: "-top-8 right-10 md:-top-10 md:right-20 md:w-6",
    },
    {
      src: "excelImage",
      class: "top-20 right-0 md:top-32 md:right-0 md:w-6",
    },
    {
      src: "videoImage",
      class: "-bottom-10 left-22 md:-bottom-14 md:left-36 md:w-6",
    },
    {
      src: "archiveImage",
      class: "bottom-5 left-0 md:bottom-10 md:left-0 md:w-8",
    },
  ];
  return (
    <div className=" flex items-center justify-center">
      <div className="w-80 md:w-[570px] flex flex-col items-center mt-16 md:mt-28 relative">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/${img.src}.png`}
            alt=""
            className={`absolute ${img.class}`}
          />
        ))}
        <h1 className="font-montserrat text-[10px] md:text-sm self-start ml-8 md:ml-10">
          Welcome to <span className="font-aclonica">Tee .Cove</span>
        </h1>
        <h1 className=" font-aclonica text-xl md:text-3xl text-center mt-1">
          Convert, edit and manage your any file in one place
        </h1>
        <h2 className="font-montserrat text-[8px] md:text-base text-center mx-10 md:mx-20">
          All-in-one web converter. Semua tools yang kamu butuhkan ada di sini
        </h2>
        <Link
          to={"#"}
          className="font-montserrat text-[11px] md:text-base bg-black text-white py-[2px] px-4 rounded-full mt-2 self-end mr-14"
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default hero;
