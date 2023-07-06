import { FolderFill, TrashFill, SunFill } from "react-bootstrap-icons";

const DataHeaderContentRight = [
  {
    id: 1,
    tag: <FolderFill size={16} fill={"#fff"} />,
    callBack: () => {},
  },
  {
    id: 2,
    tag: <TrashFill size={16} fill={"#fff"} />,
    callBack: () => {},
  },
  {
    id: 3,
    tag: <SunFill size={16} fill={"#fff"} />,
    callBackDark: () => {},
  },
];
export default DataHeaderContentRight;
