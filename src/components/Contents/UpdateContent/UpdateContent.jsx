// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Data from "../../../Data/DataBodyContent";
// import axios from "axios";
// import { BarChartFill } from "react-bootstrap-icons";
// import { updateWork } from "../../../utils/apiRoutes";
// const Container = styled.div`
//   height: 35%;
//   width: 100%;
// `;

// const TopUpdateContent = styled.div`
//   height: 10%;
//   margin-left: 20px;
//   width: 100%;
//   display: flex;
//   margin-bottom: 2%;
//   align-items: center;
// `;

// const BottomUpdateContent = styled.div`
//   width: 100%;
//   height: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Input = styled.textarea`
//   width: 90%;
//   background-color: transparent;
//   color: white;
//   height: 100%;
//   outline: none;
//   border-radius: 10px;
//   padding: 10px;
//   border-bottom: 1px solid #4544445f;

//   &:focus {
//     background-color: #333333;
//     color: white;
//   }

//   &::placeholder {
//     color: white;
//   }
// `;

// const UpdateContent = ({ bodyUpdateDes, bodyUpdate, loadData }) => {
//   const [update, setUpdate] = useState({
//     bid: null,
//     description: "",
//   });
//   console.log(bodyUpdateDes);
//   const [placeholderValue, setPlaceholderValue] = useState("");
//   useEffect(() => {
//     setUpdate((prevUpdate) => ({
//       ...prevUpdate,
//       bid: bodyUpdate,
//     }));
//   }, [bodyUpdate, bodyUpdateDes]);

//   const handleDelete = (e) => {
//     updateWorkService(update);
//   };
//   const updateWorkService = async () => {
//     return axios
//       .put(updateWork, update)
//       .then((res) => {
//         if (res.status === 200) {
//           loadData();
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <Container onMouseOver={handleDelete}>
//       <TopUpdateContent>
//         <BarChartFill size={18} fill={"#fff"} />
//         <p
//           style={{
//             fontWeight: 700,
//             fontSize: 20,
//             marginLeft: 15,
//             color: "white",
//           }}
//         >
//           Task description
//         </p>
//       </TopUpdateContent>
//       <BottomUpdateContent>
//         <Input
//           placeholder={bodyUpdateDes}
//           onChange={(e) =>
//             setUpdate({
//               ...update,
//               description: e.target.value,
//             })
//           }
//         />
//       </BottomUpdateContent>
//     </Container>
//   );
// };

// export default UpdateContent;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "../../../Data/DataBodyContent";
import axios from "axios";
import { BarChartFill } from "react-bootstrap-icons";
import { updateWork } from "../../../utils/apiRoutes";

const Container = styled.div`
  height: 35%;
  width: 100%;
`;

const TopUpdateContent = styled.div`
  height: 10%;
  margin-left: 20px;
  width: 100%;
  display: flex;
  margin-bottom: 2%;
  align-items: center;
`;

const BottomUpdateContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.textarea`
  width: 90%;
  background-color: transparent;
  color: white;
  height: 100%;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  border-bottom: 1px solid #4544445f;

  &:focus {
    background-color: #333333;
    color: white;
  }

  &::placeholder {
    color: white;
  }
`;

const UpdateContent = ({ bodyUpdateDes, bodyUpdate, loadData }) => {
  const [update, setUpdate] = useState({
    bid: null,
    description: "",
  });

  useEffect(() => {
    setUpdate((prevUpdate) => ({
      ...prevUpdate,
      bid: bodyUpdate,
      description: bodyUpdateDes, // Đặt nội dung ban đầu cho description
    }));
  }, [bodyUpdate, bodyUpdateDes]);

  const handleDelete = (e) => {
    updateWorkService(update);
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
    <Container onMouseOver={handleDelete}>
      <TopUpdateContent>
        <BarChartFill size={18} fill={"#fff"} />
        <p
          style={{
            fontWeight: 700,
            fontSize: 20,
            marginLeft: 15,
            color: "white",
          }}
        >
          Task description
        </p>
      </TopUpdateContent>
      <BottomUpdateContent>
        <Input
          value={update.description} // Đặt giá trị của ô input là update.description
          onChange={(e) =>
            setUpdate({
              ...update,
              description: e.target.value,
            })
          }
        />
      </BottomUpdateContent>
    </Container>
  );
};

export default UpdateContent;
