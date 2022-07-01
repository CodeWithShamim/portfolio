import { BarLoader } from "react-spinners";
const PreLoader = ({ loading }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <BarLoader color="#FF33FF" loading={loading} height={4} width={1400} />
      </div>
    </>
  );
};

export default PreLoader;
