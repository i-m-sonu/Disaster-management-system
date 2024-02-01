import Drone from "./pages/Drone";
import Earthquake from "./pages/Earthquake";
import Emergency_response from "./pages/Emergency_response";
import Flood from "./pages/Flood";
import Location from "./pages/Location";
import Navbar from "./pages/Navbar";
import Planning from "./pages/Planning";
import Shelter from "./pages/Shelter";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <Location /> */}
      <Emergency_response />
      <Flood />
      <Planning />
      <Drone />
      <Earthquake />
      <Shelter />
    </>
  );
};

export default page;
