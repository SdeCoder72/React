import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(()=>{
    async function GithubUsers() {
    const response = await fetch(`https://api.github.com/users?per_page=${count}`);
    const data = await response.json();

    setUsers(data);
    console.log("hello");
  }

  GithubUsers();
  }, [count])

  return(
    <>
    <h1>Github User</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
    <div style={{display:"flex", alignItems: "center", justifyContent:"center", flexWrap:"wrap", gap:"8px"}}>
      {
        users.map(user=>(
          <img src={user.avatar_url} alt={"github-users"} height={"100px"} width={"100px"} key={user.login}/>
        ))
      }
    </div>
    </>
  )
}

export default App;