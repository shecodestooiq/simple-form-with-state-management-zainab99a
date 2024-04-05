import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../store/Context";

function Home() {
    const [ name, setName, password, setPassword ] = useContext(Context);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const submitHandling=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <h1>Please Login</h1>
           
                <form onSubmit={submitHandling}>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            
            <br />
          
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit"><Link to='details'>Login</Link></button>
                </form>
            
        </div>
    );
}

export default Home;