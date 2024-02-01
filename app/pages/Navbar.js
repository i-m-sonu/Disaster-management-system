import head from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={head.head}>
        <h3>Disaster Management</h3>
        <div className={head.nav}>
          <div className={head.res}>Home</div>
          <div className={head.res}>Emergency response</div>
          <div className={head.res}>Flood Prediction</div>
          <div className={head.res}>Planning tool</div>
          <div className={head.res}>Relief Drone</div>
          <div className={head.res}>Earthquaqe Detection</div>
          <div className={head.res}>Emergency shelter</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
