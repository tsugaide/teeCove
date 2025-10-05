const about = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-32 mx-8 md:mx-32">
        <h1 className=" font-aclonica text-sm md:text-xl">
          With <span className="bg-[#90CAF9] px-2 py[2px]">Tee .Cove</span>
        </h1>
        <p className="font-montserrat text-[10px] md:text-lg mt-2">
          You do not need to open multiple website just to manage your files.
          From documents, images, videos, audio, to archives - You can handle
          it, from one website.
          <span className="font-aclonica text-xs md:text-xl ml-2">
            What do you need ?
          </span>
        </p>
        <div className="mt-4 relative w-fit">
          <p className="bg-[#FFCF43] text-[10px] md:text-lg w-fit font-montserrat px-2 pt-[2px] pb-2 md:pb-3 rounded-sm">
            Convert your file? like pdf to word, image to pdf?
          </p>
          <div className="absolute -right-16 md:-right-24 bottom-2 flex items-center">
            <img
              src="/src/assets/documentImage.png"
              alt=""
              className="-mr-1 md:w-7"
            />
            <img
              src="/src/assets/imgImage.png"
              alt=""
              className="z-10 -mb-5 w-4 md:w-7"
            />
            <img
              src="/src/assets/excelImage.png"
              alt=""
              className="-mb-3 md:w-7"
            />
          </div>
          <p className="text-[7px] md:text-sm ml-5 -mt-1 md:-mt-2 text-white bg-black px-1 md:px-2 py-[1px] rounded-full w-fit font-montserrat ">
            We got that
          </p>
          <img
            src="/src/assets/pdfImage.png"
            alt=""
            className="absolute left-36 mt-1"
          />
          <img
            src="/src/assets/arrow1.png"
            alt=""
            className="absolute -right-5 -bottom-6"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
