import React, { createContext, useState, useEffect } from "react";
import { withCookies } from "react-cookie";
import axios from "axios";
export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const token = props.cookies.get("current-token");
  const [profile, setProfile] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [editedProfile, setEditedProfile] = useState({ id: "", nickName: "" });
  const [askList, setAskList] = useState([]);
  // askListFullには自分宛ての友達申請も表示する
  const [askListFull, setAskListFull] = useState([]);
  const [inbox, setInbox] = useState([]);
  const [cover, setCover] = useState([]);

  useEffect(() => {
    const getMyprofile = async () => {
      try {
        const resmy = await axios.get("http:127.0.0.1:3000/v1/mypage", {
          headers: {
            Authorization: token,
          },
        });
        const res = await axios.get("http:127.0.0.1:3000/v1/friend_requests", {
          headers: {
            Authorization: token,
          },
        });
        resmy.data[0] && setProfile(resmy.data[0]);
        resmy.data[0] &&
          setEditedProfile({
            id: resmy.data[0].id,
            nickName: resmy.data[0].nickName,
          });
        resmy.data[0] &&
          setAskList(
            res.data.filter((ask) => {
              return resmy.data[0].userPro === ask.askTo;
            })
          );
        setAskListFull(res.data);
      } catch {
        console.log("error");
      }
    };
  });

  return <div></div>;
};

export default withCookies(ApiContextProvider);
