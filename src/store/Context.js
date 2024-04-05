import { createContext ,useState} from "react";

const Context = createContext();

export function MyProvider({ children }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const input = [ name,
        setName,
        password,
        setPassword]
        
       
    ;
   
    return (
        <Context.Provider value={input}>
            {children}
        </Context.Provider>
    );
}

export default Context;