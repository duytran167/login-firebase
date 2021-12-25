import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, signOut } from "firebase/auth"




function TitleBox() {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
 
  useEffect(() => {
    document.title = `You clicked ${count} times`  
    console.log('hihihihi')

    }, [count1, count]

  )
  return (
    <>
        <br/>
      {/* <button className="btn btn-success" onClick={() => setCount( count + 1 )}>Click {count} times</button>
      <button className="btn btn-success" onClick={() => setCount1( count1 + 1 )}>Click {count1} times</button> */}
      <button onClick={signOut} >Sign Out</button>
      
    </>
    
    )
}
export default TitleBox;

