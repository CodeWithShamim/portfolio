import { BarLoader } from "react-spinners";
const PreLoader = ({ loading }) => {
  return (
    <>
      <div className="bg-primary flex flex-col items-center justify-center w-full h-screen">
        <BarLoader
          color="#FF33FF"
          loading={loading}
          height={4}
          width={"100vw"}
        />
      </div>
    </>
  );
};

export default PreLoader;
