import Image from "next/image";
import logo from "../logo/p13nlYAzYn.jpg";
function Logophoto() {
  return (
    <Image src={logo} width={125} height={53} alt="Picture of the author" />
  );
}
export default Logophoto;
