"use client";
// import SearchBar from "../SearchBar";
import AddressCard from "./AddressCard";
import ProfileRow from "./ProfileRow";
import TotalDana from "./TotalDana";
import AddIcon from "@mui/icons-material/Add";

const HeroDashboard = () => {
  return (
    <section className="flex flex-col gap-[2.222vw] w-[75vw] ">
      <ProfileRow />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[2.222vw] font-bold text-white">Hi Bryan!</p>
          <p className="text-[1.389vw] text-white">
            Look at your update and progress portfolio
          </p>
        </div>
        <div className="flex flex-row gap-[1.111vw]">
          <button
            onClick={() => {}}
            className="w-fit aspect-[110/40] flex flex-row justify-center items-center gap-[0.556vw] bg-purple-base rounded-[1.042vw] text-white p-[0.889vw]"
          >
            <AddIcon sx={{ color: "#FFFFFF" }} />
            <p className="text-white font-medium text-[0.972vw] text-center">
              Upload
            </p>
          </button>
          <button
            onClick={() => {}}
            className="w-fit aspect-[231/40] flex flex-row justify-center items-center gap-[0.556vw] bg-purple-base rounded-[1.042vw] text-white p-[0.889vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g id="Investment-Selection">
                <path
                  id="Vector"
                  fill="#ffffff"
                  d="M14.5 5C15.8807 5 17 6.11929 17 7.5v4.7793l4.5244 1.5078c0.917 0.3057 1.4844 1.2238 1.3477 2.1807l-0.8819 6.1738 -0.123 0.8584h-9.2813l-5.04293 -5.043c-0.39053 -0.3905 -0.39053 -1.0235 0 -1.414l0.86523 -0.8653c0.47964 -0.4796 1.16976 -0.684 1.833 -0.542l1.7588 0.377V7.5C12 6.11929 13.1193 5 14.5 5m0 2c-0.2761 0 -0.5 0.22386 -0.5 0.5v9.25c0 0.3019 -0.1364 0.5875 -0.3711 0.7773 -0.2348 0.1899 -0.5436 0.2635 -0.8389 0.2002l-2.96773 -0.6357 -0.15821 0.1582L13.4141 21h6.7187l0.7588 -5.3154 -4.5244 -1.5078C15.5507 13.9045 15 13.14 15 12.2793V7.5c0 -0.27614 -0.2239 -0.5 -0.5 -0.5m-8 -5H9v2H4v2h4c0.55228 0 1 0.44772 1 1v4c0 0.5523 -0.44772 1 -1 1H6.5v1h-2v-1H2v-2h5V8H3c-0.55228 0 -1 -0.44772 -1 -1V3c0 -0.55228 0.44772 -1 1 -1h1.5V1h2z"
                  strokeWidth={1}
                />
              </g>
            </svg>

            <p className="text-white font-medium text-[0.972vw] text-center">
              Investasi Pool Pendanaan
            </p>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <TotalDana />
        <div className="flex flex-col gap-[0.667vw]">
          <div className="flex flex-row justify-between items-center">
            <p className="text-[1.389vw] text-white font-bold">Transaction</p>
            <p className="text-[0.972vw] text-white-darker font-regular">
              Lihat Riwayat Payout
            </p>
          </div>
          {[1, 2, 3].map((key: number) => (
            <AddressCard key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroDashboard;
