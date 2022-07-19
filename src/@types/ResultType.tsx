export type ResultType = {
  fileURL: string;
  setFileURL: (fileURL: string) => void;
  copied: Boolean;
  setCopied: (copied: boolean) => void;
  setUploading: (uploading: boolean) => void;
};
