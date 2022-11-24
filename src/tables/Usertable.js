// import Userable from "./tables/usertable";
const UserTable =(props)=>(
    <table>
        <thead>
            <tr>
         <th>from</th>
         <input type="text" placeholder="from"></input>
         <th>to</th>
         <input type="text" placeholder="to"></input>
         <th>depature -time</th>
         <input type="text" placeholder="depature-time"></input>
            </tr>
        </thead>
        <tbody>
           
               { props.users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                    <td>{user.time}</td>
                    <input type="text" placeholder="time"></input>
                    <td>date</td>
                    <input type="text" placeholder="date"></input>
                    <td>
                        <button className="button muted-botton">submit</button>
                        <button className="button muted-botton">Edit</button>
                        <button className="button muted-botton">Delete</button>
                    </td>
                    </tr>
               ))
               
            }
       
        </tbody>
    </table>
);
export default UserTable;