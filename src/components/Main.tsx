import { useDropzone } from "react-dropzone";
import { FC } from "react";
import image from "../assets/image.svg";
import { MainType } from "../@types/MainType";

const Main: FC<MainType> = ({ setFileURL }) => {
  const onSaveFile = (newFile: File | null) => {
    if (!newFile) alert("Error");
    else {
      setFileURL(URL.createObjectURL(newFile));
    }
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file: any) => onSaveFile(file[0]),
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
    },
    multiple: false,
  });
  return (
    <div className="bg-bgWhite flex items-center justify-center w-screen h-screen">
      <div className="rounded-lg bg-white border-2 border-white w-[290px] h-[469px] sm:w-[402px] sm:h-[469px] drop-shadow-xl flex flex-col items-center justify-between py-8">
        <h1 className="text-2xl text-center font-medium text-title">
          Upload your image
        </h1>
        <p className="text-subTitle text-center text-xs font-medium">
          File should be Jpeg, Png, ...
        </p>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="sm:w-[338px] sm:h-[219px]  w-[250px] h-[219px] border border-dashed border-blue-300 rounded-lg bg-dropZone flex flex-col justify-evenly items-center "
        >
          <input {...getInputProps()} />
          <img src={image} alt="dropZone" className="w-[115px] h-[89px]" />
          <p className="text-dropZoneText font-sm font-medium">
            Drag & Drop your image here
          </p>
        </div>
        <p className="text-dropZoneText font-sm">Or</p>
        <div>
          <label className="px-3 py-2 text-white bg-button rounded-lg cursor-pointer font-light text-xs ml-1">
            <input
              type="file"
              className="input-button"
              onChange={(e) => onSaveFile(e.target.files && e.target.files[0])}
              accept="image/png, image/jpeg, image/jpg"
            />
            Choose a file
          </label>
        </div>
      </div>
    </div>
  );
};

export default Main;
