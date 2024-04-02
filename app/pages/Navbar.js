import Link from "next/link";
import head from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>Disaster Management</h3>
        <div className={head.nav}>
          <Link href="/">
          <div className={head.res}>Home</div>
          </Link>
          <Link href="/Contact"> 
          <div className={head.res}>Emergency Contact</div>
          </Link>
          <div className={head.res}>Flood Prediction</div>
          {/* <div className={head.res}>Planning tool</div> */}
          {/* <div className={head.res}>Relief Drone</div> */}
          <Link href="/Pridiction">
          <div className={head.res}>Weather Pridiction</div>
          </Link>
          <div className={head.res}>Emergency shelter</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
