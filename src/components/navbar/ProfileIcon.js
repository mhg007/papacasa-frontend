import { Button, Dropdown, message } from "antd";
import React from "react";
import userIcon from "./Assets/user-image-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/services/services";

function ProfileIcon() {
  const [loginUser, { isLoading, isSuccess, isError, data, error }] =
  useLoginUserMutation();
  const id = JSON.parse(localStorage.getItem("id"));

  console.log("🚀 ~ Login ~ data:", id)
  const navigate = useNavigate();
  const goToProfle = (id)=>{
    console.log(id)
    navigate(`profile/${id}`)
  }

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("token");

    // Optionally display a message
    message.success("Logged out successfully");

    // Redirect the user to the login page or home page
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: (
        <div className="cursor-pointer" onClick={()=>goToProfle(id)}  rel="noopener noreferrer">
          My Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <button
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
            font: "inherit",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <button className="rounded-full">
        <img src={"https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"} width={50} className="rounded-full" alt="User Icon" />
      </button>
    </Dropdown>
  );
}

export default ProfileIcon;
