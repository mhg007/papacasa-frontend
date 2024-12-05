import { Button, Dropdown, message } from "antd";
import React from "react";
import userIcon from "./Assets/user-image-icon.svg";
import { Link, useNavigate } from "react-router-dom";

function ProfileIcon() {
  const navigate = useNavigate();

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
        <Link to="/profile"  rel="noopener noreferrer">
          My Profile
        </Link>
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
      <button>
        <img src={userIcon} alt="User Icon" />
      </button>
    </Dropdown>
  );
}

export default ProfileIcon;
