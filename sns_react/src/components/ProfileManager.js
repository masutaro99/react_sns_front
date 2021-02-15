import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { makeStyles } from "@material-ui/core/styles";
import LocationOn from "@material-ui/icons/LocationOn";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
      margin: 6,
    },
    "& .profile-image": {
      width: 150,
      height: 150,
      ojectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
      backgroundColor: "white",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
        color: "lightgrey",
        fontFamily: '"Comic Neue", cursive',
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 7px 0",
    },
  },
}));

const ProfileManager = () => {
  const classes = useStyles();
  const {
    profile,
    editedProfile,
    setEditedProfile,
    deleteProfile,
    cover,
    setCover,
  } = useContext(ApiContext);

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  const handleInputChange = () => (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setEditedProfile({ ...editedProfile, [name]: value });
  };
  return (
    <div className={classes.profile}>
      <div className="image-wrapper">
        <img
          src="http://127.0.0.1:3000/ema.png"
          alt="profile"
          className="profile-image"
        />
        <input
          type="file"
          id="imageInput"
          hidden="hidden"
          onChange={(event) => {
            setCover(event.target.files[0]);
            event.target.value = "";
          }}
        />
        <IconButton onClick={handleEditPicture}>
          <MdAddAPhoto className="photo" />
        </IconButton>
      </div>
      <button className="user" onClick={() => editedProfile()}>
        <FaUserEdit />
      </button>
      <div className="profile-details">
        <BsPersonCheckFill className="badge" />
        {profile.nickName ? (
          <span>{profile.nickName}</span>
        ) : (
          <span>unknown</span>
        )}
        <hr />
        <label>
          <input
            type="text"
            value={editedProfile.nickName}
            name="nickName"
            onChange={handleInputChange()}
          />
          <hr />
          <span>Joined at {profile}</span>
          <hr />
          <LocationOn />
          <span>JAPAN</span>
        </label>
      </div>
    </div>
  );
};

export default ProfileManager;
