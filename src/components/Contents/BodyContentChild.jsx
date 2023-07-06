import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TrashFill, Plus, Table } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getTitleService } from "../../services/getTitles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addWork } from "../../utils/apiRoutes";
import { updateWork } from "../../utils/apiRoutes";
import Data from "../../Data/DataBodyContent";
import UpdateContent from "./UpdateContent/UpdateContent";
import HeaderUpdate from "./UpdateContent/HeaderUpdate";
import FooterUpdate from "./UpdateContent/FooterUpdate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
const BodyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const TitleContent = styled.div`
  width: 80%;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 20px;
  height: 20%;
  display: flex;
  color: #ced2da;
  font-weight: 700;
  align-items: center;
  padding-left: 5px;
`;

const BoxNote = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  width: 20%;
  height: fit-content;
  background-color: #151515;
  padding-bottom: 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const UpdateContentContainer = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;

    right: 5%;
  }
`;

function App() {
  const [headerUpdate, setHeaderUpdate] = useState("");
  const [bodyUpdate, setBodyUpdate] = useState("");
  const [bodyUpdateDes, setBodyUpdateDes] = useState("");
  const [commentUpdate, setCommentUpdate] = useState("");
  const [timeComment, setTimeComment] = useState("");
  const [toggleList, setToggleList] = useState(Array(Data.length).fill(false));
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [showToDoTable, setShowToDoTable] = useState(true);
  const [items, setItems] = useState([]);
  const [add, setAdd] = useState({
    work: "",
    id_title: "",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleSubmid = (e) => {
    addWorkService(add);
    e.preventDefault();
  };
  const [update, setUpdate] = useState({
    bid: 0,
    status: 0,
  });
  const [updateIDTT, setUpdateTDTT] = useState({
    bid: 0,
    id_title: "",
  });
  const handleDelete = (e) => {
    updateWorkService(update);
  };
  const handleToggle = (index) => {
    const updatedToggleList = [...toggleList];
    updatedToggleList[index] = !updatedToggleList[index];
    setToggleList(updatedToggleList);
  };
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);

  const loadData = () => {
    // Gọi API để lấy dữ liệu
    getTitleService()
      .then((response) => {
        // Cập nhật dữ liệu vào state
        if (response.status === 200) {
          console.log(response.data.titleData);
          setData(response.data.titleData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const addWorkService = async () => {
    return axios
      .post(addWork, add)
      .then((res) => {
        if (res.status === 200) {
          loadData();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);
  // Nhóm các mục cùng title lại thành một mảng
  const groupedData = data.reduce((acc, item) => {
    if (acc[item.title]) {
      acc[item.title].push(item);
    } else {
      acc[item.title] = [item];
    }
    return acc;
  }, {});
  const onDragEnd = (result, data, setData) => {
    console.log(result.destination.droppableId);
    console.log(result.source.droppableId);
    if (result.destination.droppableId === result.source.droppableId) {
      const destinationIndex = result.destination.index;
      const sourceIndex = result.source.index;

      // Swap positions in the data array
      const updatedData = [...data];
      const [removed] = updatedData.splice(sourceIndex, 1);
      updatedData.splice(destinationIndex, 0, removed);

      setData(updatedData);
    } else if (result.destination.droppableId !== result.source.droppableId) {
      const x = parseInt(result.draggableId);
      let y;
      if (result.destination.droppableId === "TO DO") {
        y = "1";
      } else if (result.destination.droppableId === "IN WORK") {
        y = "2";
      } else if (result.destination.droppableId === "REVIEW") {
        y = "3";
      } else if (result.destination.droppableId === "DONE") {
        y = "4";
      }
      setUpdateTDTT({
        bid: x,
        id_title: y,
      });
      console.log(updateIDTT);
      axios
        .put(updateWork, updateIDTT)
        .then((res) => {
          if (res.status === 200) {
            loadData();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const updateWorkService = async () => {
    return axios
      .put(updateWork, update)
      .then((res) => {
        if (res.status === 200) {
          loadData();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <BodyContent>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, data, setData)}>
        {Object.keys(groupedData).map((title, titleIndex) => {
          return (
            <Droppable droppableId={title} key={title}>
              {(provided, snapshot) => {
                return (
                  <BoxNote {...provided.droppableProps} ref={provided.innerRef}>
                    <TitleContent
                      style={{
                        borderLeft: "3px solid #8833ff",
                      }}
                    >
                      <div>{title}</div>
                    </TitleContent>
                    {groupedData[title].map((item, itemIndex) => (
                      <React.Fragment key={item.id}>
                        {item.id_Title?.status === 0 ? (
                          <Draggable
                            draggableId={`${item.id_Title.id}`}
                            index={itemIndex}
                            key={item.id}
                          >
                            {(provided) => (
                              <TitleContent
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  backgroundColor: "rgba(179, 179, 179, 0.2)",
                                  borderRadius: "5px",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                  display: "none",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  height: "fit-content",
                                  color: "white",
                                }}
                                onClick={() => {
                                  setToggle(!toggle);
                                  setHeaderUpdate(item.title);
                                }}
                                onMouseDown={() => {
                                  setBodyUpdate(item.id_Title?.id);
                                  setCommentUpdate(item.id_Title?.comment);
                                  setTimeComment(item.id_Title?.createdAt);
                                  setBodyUpdateDes(item.id_Title?.description);
                                }}
                              >
                                <p style={{ fontSize: "15px" }}>
                                  {item.id_Title?.work}
                                </p>
                                <button
                                  style={{ height: "100%" }}
                                  onMouseOver={() =>
                                    setUpdate({
                                      bid: item.id_Title?.id,
                                      status: 0,
                                    })
                                  }
                                >
                                  <TrashFill onClick={handleDelete}></TrashFill>
                                </button>
                              </TitleContent>
                            )}
                          </Draggable>
                        ) : item.id_Title?.status === 1 ? (
                          <Draggable
                            draggableId={`${item.id_Title.id}`}
                            index={itemIndex}
                            key={item.id}
                          >
                            {(provided) => (
                              <TitleContent
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  backgroundColor:
                                    item.id_Title?.status === 1
                                      ? "rgba(179, 179, 179, 0.2)"
                                      : "rgba(179, 179, 179, 0.2)",
                                  borderRadius: "5px",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  height: "fit-content",
                                  color: "white",
                                  ...provided.draggableProps.style,
                                }}
                                onMouseDown={() => {
                                  setBodyUpdate(item.id_Title?.id);
                                  setCommentUpdate(item.id_Title?.comment);
                                  setTimeComment(item.id_Title?.createdAt);
                                  setBodyUpdateDes(item.id_Title?.description);
                                }}
                              >
                                <p
                                  style={{ fontSize: "15px" }}
                                  onClick={() => {
                                    setToggle(!toggle);
                                    setHeaderUpdate(item.title);
                                  }}
                                >
                                  {item.id_Title?.work}
                                </p>
                                <button
                                  style={{
                                    height: "100%",
                                  }}
                                  onMouseOver={() =>
                                    setUpdate({
                                      bid: item.id_Title?.id,
                                      status: 0,
                                    })
                                  }
                                >
                                  <TrashFill onClick={handleDelete}></TrashFill>
                                </button>
                              </TitleContent>
                            )}
                          </Draggable>
                        ) : null}
                      </React.Fragment>
                    ))}
                    {provided.placeholder}
                    <form
                      onSubmit={handleSubmid}
                      style={
                        toggleList[title]
                          ? { display: "block", width: "100%" }
                          : { display: "none" }
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "10px",
                          width: "100%",
                        }}
                      >
                        <div>
                          <textarea
                            onChange={(e) =>
                              setAdd({ ...add, work: e.target.value })
                            }
                            type="text"
                            style={{
                              backgroundColor: "rgba(179, 179, 179, 0.2)",
                              width: "100%",
                              height: 100,
                              borderRadius: "5px",
                              paddingLeft: "5px",
                              paddingRight: "5px",
                              display: "flex",
                              outline: "none",
                              justifyContent: "space-between",
                              alignItems: "center",
                              color: "white",
                            }}
                          />

                          <div
                            style={{
                              display: "flex",
                              cursor: "pointer",
                            }}
                          >
                            <button
                              onClick={(e) =>
                                setAdd((prevState) => {
                                  let idTitle;
                                  if (title === "TO DO") {
                                    idTitle = 1;
                                  } else if (title === "IN WORK") {
                                    idTitle = 2;
                                  } else if (title === "REVIEW") {
                                    idTitle = 3;
                                  } else if (title === "DONE") {
                                    idTitle = 4;
                                  }

                                  return {
                                    ...prevState,
                                    id_title: idTitle,
                                  };
                                })
                              }
                              type="submit"
                              style={{
                                background: "#5d73d0",
                                marginTop: "8px",
                                padding: "5px",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                            >
                              Send
                            </button>

                            <div
                              onClick={() => handleToggle(!title)}
                              style={{
                                background: "#5d73d0",
                                marginTop: "8px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                marginLeft: "10px",
                              }}
                            >
                              X
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <TitleContent
                      style={
                        toggleList[title]
                          ? {
                              display: "none",
                            }
                          : {
                              borderRadius: "5px",
                              paddingLeft: "5px",
                              paddingRight: "5px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              color: "white",
                            }
                      }
                    >
                      <div
                        onClick={() => handleToggle(title)}
                        style={{
                          fontSize: "15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Plus style={{ fontSize: "20px" }} /> Add Task
                      </div>
                      <Table onClick={handleToggleCalendar}></Table>
                    </TitleContent>
                  </BoxNote>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
      {showCalendar && (
        <Calendar
          style={{
            position: "absolute",
            zIndex: "90",
            bottom: "30px",
            left: "30",
            marginBottom: "30px",
            height: "30px",

            with: "500px",
          }}
        />
      )}
      <UpdateContentContainer
        style={
          toggle === true
            ? {
                position: "absolute",
                zIndex: "100",

                height: "80%",
                borderRadius: "20px",
                background: "#202020",
              }
            : { display: "none" }
        }
      >
        <HeaderUpdate
          bodyUpdate={bodyUpdate}
          headerUpdate={headerUpdate}
          toggle={toggle}
          loadData={loadData}
          onClick={() => setToggle(!toggle)}
        ></HeaderUpdate>
        <UpdateContent
          bodyUpdateDes={bodyUpdateDes}
          bodyUpdate={bodyUpdate}
          loadData={loadData}
        ></UpdateContent>
        <FooterUpdate
          bodyUpdate={bodyUpdate}
          commentUpdate={commentUpdate}
          timeComment={timeComment}
          loadData={loadData}
        />
      </UpdateContentContainer>
    </BodyContent>
  );
}

export default App;
