import checkMark from "../assets/checkMark.svg";
import { FC } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ResultType } from "../@types/ResultType";

const Result: FC<ResultType> = ({
  fileURL,
  setCopied,
  copied,
  setFileURL,
  setUploading,
}) => {
  return (
    <div className="bg-bgWhite flex items-center justify-center w-screen h-screen flex-col gap-3">
      <div className="rounded-lg bg-white border-2 border-white w-[290px] h-[469px] sm:w-[402px] sm:h-[469px] drop-shadow-xl flex flex-col items-center justify-between py-8">
        <img
          src={checkMark}
          alt="Check Mark"
          className="w-[35px] h-[35px] font-medium text-title text-lg"
        />
        <h2>Uploaded Successfully!</h2>
        <img
          src={fileURL}
          alt="Uploaded"
          className="sm:w-[338px] sm:h-[225px] w-[250px] rounded-xl"
        />
        <div className="bg-dropZone border border-border sm:w-[338px] sm:h-[34px] w-[250px] rounded-lg py-1 px-0.5 text-title flex justify-between items-center">
          <p className="text-[8px] overflow-hidden whitespace-nowrap text-ellipsis">
            {fileURL}
          </p>
          <CopyToClipboard onCopy={() => setCopied(true)} text={fileURL}>
            <button className="h-[30px] w-[100px] text-white bg-button rounded-lg cursor-pointer font-light text-xs">
              {copied ? "Copied" : "Copy Link"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <button
        onClick={() => {
          setFileURL("");
          setUploading(true);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
