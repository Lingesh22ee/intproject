import { useState } from "react";


    const AddUserForm =(Props)=>{
        const initialFormState={id:null,name:'',username:''}
        const [user,setuser]=useState(initialFormState);
        const handleInputchange=(event)=>{
            const{name,value}=event.target
            setuser ({...user,[name]:value})
        }

        const handleAdd =()=>{
            
        }
        return(
            <form onSubmit={
                event =>{
                    event.preventDefault();
                    if(!user.name||!user.username) return;
                    Props.addUser(user);
                    setuser(initialFormState);

                }
            }>
                <label>Name</label>
                <input type="text" onChange={handleInputchange} name="name" value={user.name}/>
                <label>username</label>
                <input type="text" name="username"/>
                <button onClick={()=>handleAdd()}>Add new user</button>
            </form>
        ) 

}
export default AddUserForm;