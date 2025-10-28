import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("in server or component");
  return (
    <div>
      <h3 className="text-5xl text-center">This ia next Js page</h3>
      <Hello></Hello>    
    </div>
  );
}
