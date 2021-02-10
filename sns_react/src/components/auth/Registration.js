import React, { useState } from 'react'

export default function Registration() {
  // useState()を用いて、ユーザーデータの初期値（空の文字列）を定義する。
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const handleSubmit = (event) => {
    console.log("イベント発火")
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
        <input type="password"
               name="password_confirmation"
               placeholder="確認用パスワード"
               value={passwordConfirmation}
               onChange={event => setPasswordConfirmation(event.target.value)}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  )
}