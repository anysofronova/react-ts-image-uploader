const Uploading = () => {
  return (
    <div className="w-screen min-h-screen bg-bgWhite flex items-center justify-center">
      <div className="w-full max-w-[25rem] h-36 rounded-xl bg-white shadow-xl font-medium mx-4 text-lg px-8 flex flex-col justify-center gap-7">
        <p>Uploading...</p>
        <div className="w-full h-1.5 bg-blue-200 rounded-md relative">
          <div className="h-full bg-blue-500 w-[6rem] rounded-lg absolute animate-loading" />
        </div>
      </div>
    </div>
  );
};

export default Uploading;
