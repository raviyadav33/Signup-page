import React, {useState, useContext} from 'react';

const SignIn = () => {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const [logged,setlogged]=useState(false);
  const[token,setToken]=useState(null);
//   const [isDisabled, changeDisabled] = useState(true);
//   const {setJwt} = useContext(MainContext);
//   const history = useHistory();
   

//   function toggleDisabled() {
//     if (username !== 'username' && password !== 'password') {
//         changeDisabled(false);
//     } else {
//         changeDisabled(true);
//     }
// }

// function handleChange(event) {
//   switch (event.target.username) {
//       case 'username':
//           changeEmail(event.target.value);
//           toggleDisabled();
//           break;
//       case 'password':
//           changePassword(event.target.value);
//           toggleDisabled();
//           break;
//       default:
//           break;
//   }
// }

    function login(e){
         e.preventDefault();
         let val=({username,password ,logged,token});
      console.log("form", val);
        fetch("http://192.34.56.14/v1/login",{
          method: 'post',
          headers: {
            Accept: 'application/json', 'Content-Type': 'application/json', 'X-Api-Key': 'usf-user',
          },
          body: JSON.stringify(val)  
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log('Created Gist:', data);


          localStorage.setItem("logged",JSON.stringify({
            logged:true,
            token:data.token
          }))

        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Sign In Here
          </h2>
          <form > 
          <div>
            <label className="block mb-1 font-bold text-gray-500">username</label>
            <input
            onChange={(e)=>setUsername(e.target.value)}
              type="text"
              value={username}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-gray-500">password</label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              value={password}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>
          <button onClick={login} className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 mt-5">
            Sign In
          </button>
              </form>
              </div>
              </div>
    )
}

export default SignIn
