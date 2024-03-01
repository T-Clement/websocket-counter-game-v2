

function RoomsList({rooms}) {



    return (
        <ul>
            {rooms.map(room => (<li>{room}</li>))}
        </ul>
    )


}


export default RoomsList;
