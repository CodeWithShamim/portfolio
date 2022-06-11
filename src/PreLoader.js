import { BarLoader } from "react-spinners";
import logo from "../src/images/logo.png";
const PreLoader = ({ loading }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <p className="text-secondary animate-bounce ease-linear text-2xl font-bold">
          <img src={logo} alt="logo" />
        </p>
        <BarLoader color="#00EACF" loading={loading} height={4} width={280} />
      </div>
    </>
  );
};

export default PreLoader;
