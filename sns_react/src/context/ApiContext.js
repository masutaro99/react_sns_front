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
  const [askListFull, setAskListFull] = useState([]);
  const [inbox, setInbox] = useState([]);
  const [cover, setCover] = useState([]);

  useEffect(() => {
    const getMyprofile = async () => {
      try {
        const resmy = await axios.get("http://127.0.0.1:3000/v1/mypage/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const res = await axios.get(
          "http://127.0.0.1:3000/v1/friend_requests/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        resmy.data["user_id"] && setProfile(resmy.data["user_id"]);
        resmy.data["user_id"] &&
          setEditedProfile({
            id: resmy.data["user_id"],
            nickName: resmy.data["nickName"],
          });
        const setdata = res.data.filter((ask) => {
          console.log(ask["askTo_id"]);
          return ask["askTo_id"] === resmy.data["user_id"];
        });
        console.log(setdata[0]["id"]);
        resmy.data["user_id"] && setAskList([setdata[0]["askFrom_id"]]);
        console.log(askList);
        //setAskListFull(res.data);
      } catch {
        console.log("error");
      }
    };
    const getProfile = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3000/v1/profiles/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProfiles(res.data);
      } catch {
        console.log("error");
      }
    };
    // getInboxも今後実装
    getMyprofile();
    getProfile();
    // getInbox();
  }, [token, profile.id]);

  const editProfile = async () => {
    const editData = new FormData();
    editData.append("nickName", editedProfile.nickName);
    //cover.name && editData.append("img", cover, cover.name);
    try {
      const res = await axios.put(
        `http:127.0.0.1:3000/v1/profiles/&{profile.id}/`,
        editData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setProfile(res.data);
    } catch {
      console.log("error");
    }
  };

  const newRequestFriend = async (askData) => {
    try {
      const res = await axios.post(
        `http:127.0.0.1:3000/v1/friend_requests/`,
        askData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setAskListFull([...askListFull, res.data]);
    } catch {
      console.log("error");
    }
  };

  const changeApprovalRequest = async (uploadDataAsk, ask) => {
    try {
      const res = await axios.put(
        `http:127.0.0.1:3000/v1/friend_requests/${ask.id}`,
        uploadDataAsk,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setAskList(askList.map((item) => (item.id === ask.id ? res.data : item)));

      const newDataAsk = new FormData();
      newDataAsk.append("askTo", ask.askFrom);
      newDataAsk.append("approved", true);
      const newDataAskPut = new FormData();
      newDataAskPut.append("askTo", ask.askFrom);
      newDataAskPut.append("askFrom", ask.askTo);
      newDataAskPut.append("approved", true);
      // 出す予定の友達申請の逆方向の申請があれば取得する
      const resp = askListFull.filter((item) => {
        return item.askFrom === profile.userPro && item.askTo === ask.askFrom;
      });
      !resp[0]
        ? await axios.post(
            `http:127.0.0.1:3000/v1/friend_requests/`,
            newDataAsk,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            }
          )
        : await axios.put(
            `http:127.0.0.1:3000/v1/friend_requests/${resp[0]}`,
            newDataAskPut,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            }
          );
    } catch {
      console.log("error");
    }
  };

  return (
    <ApiContext.Provider
      value={{
        profile,
        profiles,
        cover,
        setCover,
        askList,
        askListFull,
        newRequestFriend,
        editedProfile,
        changeApprovalRequest,
        editProfile,
        setEditedProfile,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default withCookies(ApiContextProvider);
