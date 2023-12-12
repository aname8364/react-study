import React, {useState} from "react"

function App() {
  let users = {
    aname: {
      name: "aname",
      password: "1234"
    },
    guest: {
      name: "guest0",
      password: "guest"
    }
  }

  const [loginData, setLoginData] = useState({
    id: "",
    password: ""
  })
  const [userName, setUserName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [failCount, setFailCount] = useState(0)
  const FAIL_LIMIT = 5

  const addFailCount = () => {
    setFailCount(i => i+1)
  }

  const resetFailCount = () => {
    setFailCount(0)
  }

  const checkFail = () => {
    return failCount >= FAIL_LIMIT
  }

  const onChange = (e) => {
    const {value, name} = e.target

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const isUserExist = () => {
    return loginData.id in users
  }

  const getUser = (id) => {
    return users[id]
  }

  const checkPassword = (user, password) => {
    return password === user.password
  }

  const loginSuccess = (userName) => {
    alert("Logged in")
    setIsLoggedIn(true)
    setUserName(userName)
    resetFailCount()
  }

  const loginFail = (reason) => {
    alert(reason)
    addFailCount()
  }

  const login = (onSuccess, onWrongPassword, onNoUser) => {
    if (!isUserExist()) {
      return onNoUser()
    }
    
    let user = getUser(loginData.id)
    checkPassword(user, loginData.password)?
    onSuccess(user) : onWrongPassword()
  }
  
  const onLogin = () => {
    login(
      (user) => loginSuccess(user.name),
      () => loginFail("Wrong password."),
      () => loginFail(`No user found: ${loginData.id}`)
    )
  }

  const onLogout = () => {
    setIsLoggedIn(false)
    setUserName("")
  }

  return (
    <>
    <h1>InputExample</h1>
    <div>
      {isLoggedIn ? (
        <>
        <b>Logged in as {userName}</b>
        <p><button onClick={onLogout}>Logout</button></p>
        </>
      ) : (
        <>
        {checkFail() ? (
          <>
          <b>Try again later..</b>
          </>
        ) : (
          <>
          <p><input name="id" onChange={onChange} placeholder="id" value={loginData.id}/></p>
          <p><input name="password" type="password" onChange={onChange} placeholder="password" value={loginData.password}/></p>
          <p><button onClick={onLogin}>Login</button></p>
          </>
        )}
        </>
      )}
    </div>
    </>
  )
}

export default App