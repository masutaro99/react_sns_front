import React, { useState } from 'react'
import axios from 'axios'

export default function Registration() {
  // useState()を用いて、ユーザーデータの初期値（空の文字列）を定義する。
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (event) => {
    const data = {
      "user": {
        "email": email, "password": password
      }
    }
    //追加
    axios.post("http://localhost:3000/v1/users/", data,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    },
    { withCredentials: true }
    ).then(response => {
      console.log("registration res", response)
    }).catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()
  }
  return (
    <div>
      <p>新規登録</p>
      {/* 追加 */}
      <form onSubmit={handleSubmit}>
        <input type="email"
               name="email"
               placeholder="メールアドレス"
               value={email}
               onChange={event => setEmail(event.target.value)}
        />
        <input type="password"
               name="password"
               placeholder="パスワード"
               value={password}
               onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  )
}