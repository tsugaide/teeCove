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
            <img src="/documentImage.png" alt="" className="-mr-1 md:w-7" />
            <img src="/imgImage.png" alt="" className="z-10 -mb-5 w-4 md:w-7" />
            <img src="/excelImage.png" alt="" className="-mb-3 md:w-7" />
          </div>
          <p className="text-[7px] md:text-sm ml-5 -mt-1 md:-mt-2 text-white bg-black px-1 md:px-2 py-[1px] rounded-full w-fit font-montserrat ">
            We got that
          </p>
          <img src="/pdfImage.png" alt="" className="absolute left-36 mt-1" />
          <img
            src="/arrow1.png"
            alt=""
            className="absolute -right-5 -bottom-5"
          />
        </div>
        <div className="mt-10 relative w-fit ml-auto">
          <img src="/arrow2.png" alt="" className="absolute -top-6 -left-12" />
          <p className="bg-[#FFCF43] text-[10px] md:text-lg w-fit font-montserrat px-2 pt-[2px] pb-2 md:pb-3 rounded-sm">
            Compress your file ? without downgrade quality ?
          </p>
          <p className="text-[7px] md:text-sm ml-5 -mt-1 md:-mt-2 text-white bg-black px-1 md:px-2 py-[1px] rounded-full w-fit font-montserrat ">
            We got that
          </p>
        </div>
        <div className="ml-auto w-fit flex gap-2">
          <div>
            <img src="/imgCompress1.png" alt="" />
            <p className="text-[7px] font-montserrat text-[#808080] text-center font-light">
              Image1.png - 500kb
            </p>
          </div>
          <div>
            <img src="/imgCompress2.png" alt="" />
            <p className="text-[7px] font-montserrat text-[#808080] text-center font-light">
              Image2.png - 100kb
            </p>
          </div>
        </div>
        <div className="text-[10px] font-montserrat px-2 py-[1px] border-black border-[0.5px] w-fit">
          ****************
        </div>
        <div className="flex gap-7">
          <div className="mt-3 w-fit ">
            <p className="bg-[#FFCF43] text-[10px] md:text-lg w-fit font-montserrat px-2 pt-[2px] pb-2 md:pb-3 rounded-sm">
              Protect your file ?
            </p>
            <p className="text-[7px] md:text-sm ml-5 -mt-1 md:-mt-2 text-white bg-black px-1 md:px-2 py-[1px] rounded-full w-fit font-montserrat ">
              We got that
            </p>
          </div>
          <div className="mt-3 w-fit ">
            <p className="bg-[#FFCF43] text-[10px] md:text-lg w-fit font-montserrat px-2 pt-[2px] pb-2 md:pb-3 rounded-sm">
              Edit your file ?
            </p>
            <p className="text-[7px] md:text-sm ml-5 -mt-1 md:-mt-2 text-white bg-black px-1 md:px-2 py-[1px] rounded-full w-fit font-montserrat ">
              We got that
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
