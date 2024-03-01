import { useState } from "react";




function FormCreateRoom({addRoom}){

    const [roomName, setRoomName] = useState("");


    const handleChange = (e) => {
        setRoomName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addRoom(roomName);
    }


    return (
        <div>
            <h3>Add new room</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addRoom">Name of room :</label>
                <input type="text" value={roomName} onChange={handleChange}/>
                <input type="submit" value="Add New Room" />
            </form>
        </div>

    )

}


export default FormCreateRoom;