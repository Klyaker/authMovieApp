import { useState } from "react";


const Form = ({title, handleClick}) => {

const [email, setEmail] = useState('');
const [pass, setPass] = useState('');


return (
    <div>
        <input style={{width:200, height:30, marginLeft:20, marginTop:20, borderRadius:10, fontFamily:'monospace', textAlign:'center'}}
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
        />
        <input style={{width:200, height:30, marginLeft:20, marginTop:20, borderRadius:10, fontFamily:'monospace', textAlign:'center'}}
        type="password" 
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
        />
        <button onClick={() => handleClick(email, pass)}>
            {title}
        </button>
            
    </div>
   );
};

export {Form};