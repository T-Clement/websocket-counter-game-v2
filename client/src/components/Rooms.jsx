import React, { useState } from 'react';
import FormCreateRoom from './FormCreateRoom';
import RoomsList from './RoomsList';


function Rooms () {

    const [rooms, setRooms] = useState([]);



    const addRoomToRooms = (name) => {
        setRooms([...rooms, name])
    }


    return (
        <div>
            <h2>Rooms</h2>

            {rooms.length === 0 ? <p>Aucune room n'est créée</p> : <p>Des rooms sont crées</p>}

            {
                <RoomsList rooms = { rooms } />
            }
            <FormCreateRoom addRoom = {addRoomToRooms}/>

        </div>
    );


}


export default Rooms;