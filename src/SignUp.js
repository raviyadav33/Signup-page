import React,{useState} from "react";

export const SignUp = () => {
   
    // const[employee_id,setEmployeeid]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[login_pin,setLogin_pin]=useState("");
    const[verification,setVerification]=useState(false);
    async function signup(e){
        e.preventDefault();
        let item=({username,password,login_pin,verification})
        console.log(item);
        let url="http://192.34.56.14/v1/registration/user";
        // fetch(url, {
        //   method: 'post',
        //   headers: {
        //     Accept: 'application/json', 'Content-Type': 'application/json', 'X-Api-Key': 'usf-user',
        //   },
        //   body: JSON.stringify(item)
        // }).then(function(response) {
        //   if(!response.ok){
        //     throw Error(response.statusText);
        //   }
        //   return response.json();
        // }).then(function(data) {
        //   console.log('Created Gist:', data);
        // }).catch((error)=>{
        //   alert(error);
        // })
          const data=await fetch(url,{
            method:"POST",
            headers:{
              Accept: 'application/json', 'Content-Type': 'application/json', 'X-Api-Key': 'usf-user',
            },
            body:JSON.stringify(item)
          })
          const myJson=await data.json()
            console.log(myJson);
             if(myJson.success){
               setVerification(true);
             }else{
                alert(myJson.message)
             }
        //       } 
        //   })
        //   results= await results.json();
        //   console.log("results" ,results)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Create Your Account
        </h2>
        <form > 
          {/* <div>
            <label className="block mb-1 font-bold text-gray-500">
               Role Name
            </label>
            <input
              onChange={(e)=>setroleName(e.target.value)}
              type="text"
              value={rolename}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div> */}
          {/* <div>
            <label className="block mb-1 font-bold text-gray-500">
              Employee_id
            </label>
            <input
            onChange={(e)=>setEmployeeid(e.target.value)}
              type="text"
              value={employee_id}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div> */}
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
          <div>
            <label className="block mb-1 font-bold text-gray-500">login pin</label>
            <input
            onChange={(e)=>setLogin_pin(e.target.value)}
              type="number"
              value={login_pin}
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="agree" />
            <label  className="ml-2 text-gray-700 text-sm">
              I agree to the terms and privacy.
            </label>
          </div>
          <button onClick={signup} className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 mt-5">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
