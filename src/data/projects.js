// IMPORT ALL IMAGES (REQUIRED FOR PRODUCTION)
import interior from "../assets/interior.png";
import construct1 from "../assets/construct_1.png";
import residential from "../assets/residential.png";
import construct2 from "../assets/construct_2.png";
import residential2 from "../assets/residential2.png";
import supplyInstall from "../assets/supply_install.png";
import lasPinas from "../assets/las_pinas.png";
import bataan from "../assets/bataan.png";
import campOlivia from "../assets/camp_olivia.png";
import davao from "../assets/davao.png";
import lungCenter from "../assets/lung_center.png";
import mandaluyong from "../assets/mandaluyong.png";
import commFloor from "../assets/comm_floor.png";
import commCounter from "../assets/comm_counter.png";

const projects = [
  {
    title: "Interior Renovation",
    category: "Renovation",
    scope: "Finishing & Installation",
    image: interior,
  },
  {
    title: "Institutional Renovation",
    category: "Renovation",
    scope: "Window Replacement & Glass Installation",
    image: construct1,
  },
  {
    title: "Residential Renovation",
    category: "Residential",
    scope: "Structural & Interior Finishing",
    image: residential,
  },
  {
    title: "Commercial Renovation",
    category: "Commercial",
    scope: "Structural & Interior Finishing",
    image: construct2,
  },
  {
    title: "Commercial Interior Fit-Out",
    category: "Fit-Out",
    scope: "Construction & Finishing",
    image: residential2,
  },
  {
    title: "Architectural Lighting Fixtures",
    category: "Supply & Installation",
    scope: "Architectural Lighting Fixtures",
    image: supplyInstall,
  },
  {
    title: "Las Piñas Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication & Modular Construction",
    image: lasPinas,
  },
  {
    title: "Bataan Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication & Modular Construction",
    image: bataan,
  },
  {
    title: "Camp Oliva Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication & Modular Construction",
    image: campOlivia,
  },
  {
    title: "Davao Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication & Modular Construction",
    image: davao,
  },
  {
    title: "Lung Center Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication & Modular Construction",
    image: lungCenter,
  },
  {
    title: "Mandaluyong Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication & Modular Construction",
    image: mandaluyong,
  },
  {
    title: "Commercial Floor Polishing",
    category: "Restoration",
    scope: "Floor Polishing",
    image: commFloor,
  },
  {
    title: "Countertop Polishing",
    category: "Restoration",
    scope: "Countertop Polishing",
    image: commCounter,
  },
];

export default projects;