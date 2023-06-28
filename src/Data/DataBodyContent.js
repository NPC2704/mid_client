import { TrashFill, Plus, Table } from "react-bootstrap-icons";
import styled from "styled-components";
import axios from "axios";
const TitleContent = styled.div`
  width: 80%;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 20px;
  height: 30px;
  display: flex;
  color: #ced2da;
  font-weight: 700;
  align-items: center;
  padding-left: 5px;
`;
const DataBodyContent = [
  {
    id: 1,
    title: (
      <TitleContent
        style={{
          borderLeft: "3px solid #8833ff",
        }}
      >
        <div>TO DO (2)</div>
      </TitleContent>
    ),
    task: "task",
    addTask: "Add Task",
    tagTrash: <TrashFill></TrashFill>,
    tagPlus: <Plus style={{ fontSize: "20px" }} />,
    tagTable: <Table></Table>,
  },
  {
    id: 2,
    title: (
      <TitleContent
        style={{
          borderLeft: "3px solid #ffc931",
        }}
      >
        <div>IN WORK (2)</div>
      </TitleContent>
    ),
    task: "task",
    addTask: "Add Task",
    tagTrash: <TrashFill></TrashFill>,
    tagPlus: <Plus style={{ fontSize: "20px" }} />,
    tagTable: <Table></Table>,
  },
  {
    id: 3,
    title: (
      <TitleContent
        style={{
          borderLeft: "3px solid #2fbeff",
        }}
      >
        <div>REVIEW (2)</div>
      </TitleContent>
    ),
    task: "task",
    addTask: "Add Task",
    tagTrash: <TrashFill></TrashFill>,
    tagPlus: <Plus style={{ fontSize: "20px" }} />,
    tagTable: <Table></Table>,
  },
  {
    id: 4,
    title: (
      <TitleContent
        style={{
          borderLeft: "3px solid #2acb3d",
        }}
      >
        <div>DONE (2)</div>
      </TitleContent>
    ),
    task: "task",
    addTask: "Add Task",
    tagTrash: <TrashFill></TrashFill>,
    tagPlus: <Plus style={{ fontSize: "20px" }} />,
    tagTable: <Table></Table>,
  },
];
export default DataBodyContent;
