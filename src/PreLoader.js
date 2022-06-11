import { BarLoader } from "react-spinners";
const PreLoader = ({ loading }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <p className="text-secondary animate-bounce ease-linear text-2xl font-bold">
          SHAMIM ISLAM
        </p>
        <BarLoader color="#ffffff" loading={loading} height={4} width={180} />
      </div>
    </>
  );
};

export default PreLoader;
