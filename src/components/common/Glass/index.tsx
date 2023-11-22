import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
const GlassBg = ({ children, className = "" }: Props) => (
  <div
    className={`${className} bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-xl h-full w-full`}
    style={{
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    }}
  >
    {children}
  </div>
);

export default GlassBg;
