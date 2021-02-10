import React, { useState } from 'react'

export default function Registration() {
  // useState()を用いて、ユーザーデータの初期値（空の文字列）を定義する。
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  return (
    <div>
      <p>新規登録</p>
      {/* 追加 */}
      <form>
        <input type="email"
               name="email"
               placeholder="メールアドレス"
               value={email}
        />
        <input type="password"
               name="password"
               placeholder="パスワード"
               value={password}
        />
        <input type="password"
               name="password_confirmation"
               placeholder="確認用パスワード"
               value={passwordConfirmation}
        />
        <button type="submit">登録</button>
      </form>
    </div>
  )
}