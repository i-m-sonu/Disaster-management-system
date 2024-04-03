import Link from "next/link";
import head from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>Disaster Management</h3>
        <div className={head.nav}>
          <Link className={head.link} href="/">
          <div className={head.res}>Home</div>
          </Link>
          <Link className={head.link} href="/Precaution">
          <div className={head.res}>Precautions</div>
          </Link>
          <Link className={head.link} href="/Contact"> 
          <div className={head.res}>Emergency Contact</div>
          </Link>
          {/* <div className={head.res}>Flood Prediction</div> */}
          {/* <div className={head.res}>Planning tool</div> */}
          {/* <div className={head.res}>Relief Drone</div> */}
          <Link className={head.link} href="/Pridiction">
          <div className={head.res}>Weather Pridiction</div>
          </Link>
          <Link className={head.link} href="/Help">
          <div className={head.res}>Quick Help</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
