import {
  Grid3x3GapFill,
  FileTextFill,
  CheckSquareFill,
  CalendarFill,
  BarChartFill,
  ColumnsGap,
} from "react-bootstrap-icons";
const DataNavbar = [
  {
    id: 1,
    nameIcon: "Task",
    callBack: () => {},
    tag: <CheckSquareFill size={18} fill={"#fff"} />,
  },
  {
    id: 2,
    nameIcon: "Broards",
    callBack: () => {},
    tag: <Grid3x3GapFill size={18} fill={"#fff"} />,
  },
  {
    id: 3,
    nameIcon: "Calendars",
    callBack: () => {},
    tag: <CalendarFill size={18} fill={"#fff"} />,
  },
  {
    id: 4,
    nameIcon: "Grantt",
    callBack: () => {},
    tag: <FileTextFill size={18} fill={"#fff"} />,
  },
  {
    id: 5,
    nameIcon: "Timeline",
    callBack: () => {},
    tag: <ColumnsGap size={18} fill={"#fff"} />,
  },
  {
    id: 6,
    nameIcon: "Activity",
    callBack: () => {},
    tag: <BarChartFill size={18} fill={"#fff"} />,
  },
];

export default DataNavbar;
