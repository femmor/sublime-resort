import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

import {withRoomConsumer} from "../context"

import Loading from "./Loading"

function RoomsContainer({context}) {
    const { loading, sortedRooms, rooms } = context;
    console.log(context)
    if (loading) {
        return <Loading/>
    }
    return (
        <div>
            Hello from RoomsContainer
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';

// // Context
// import {RoomConsumer} from "../context"

// import Loading from "./Loading"

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//         {
//             value => {
//                 // console.log(value);
//                 const { loading, sortedRooms, rooms } = value;
//                 if (loading) {
//                     return <Loading/>
//                 }
//                 return (
//                     <div>
//                         Hello from RoomsContainer
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }
//         }
//         </RoomConsumer>
        
//     );
// }

// export default RoomsContainer;
