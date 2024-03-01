

function RoomsList({rooms}) {



    return (
        <ul>
            {rooms.map(room => (<li key={room}>{room} <button>Rejoindre la room</button></li>))}
        </ul>
    )


}


export default RoomsList;
