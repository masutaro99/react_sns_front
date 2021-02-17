import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import format from "date-fns/format";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Profile = ({ profileData, askData }) => {
  const classes = useStyles();
  const { newRequestFriend, profile } = useContext(ApiContext);

  const newRequest = () => {
    const askUploadData = {
      friendrequest: {
        askTo_id: profileData.user_id,
        askFrom_id: profile.user_id,
        approved: false,
      },
    };
    console.log(askUploadData);
    newRequestFriend(askUploadData);
  };
  return (
    <Card style={{ position: "relative", display: "flex", marginBottom: 10 }}>
      <CardMedia
        style={{ minWidth: 100 }}
        image="http://127.0.0.1:3000/ema.png"
      />
      <CardContent sytle={{ padding: 5 }}>
        <Typography variant="h6">
          {profileData.nickName ? profileData.nickName : "Unknown"}
        </Typography>
        <Typography>{profileData.created_at}</Typography>
        {!askData[0] ? (
          <Button
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => newRequest()}
          >
            Ask as friend
          </Button>
        ) : (
          <Button
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
            disabled
          >
            Ask as friend
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Profile;
