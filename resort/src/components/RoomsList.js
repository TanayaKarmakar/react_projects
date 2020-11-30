import React from 'react';
import Room from './Room';

const RoomsList = (props) => {
    let roomsList = null;
    if(props.rooms.length == 0) {
        roomsList = <div className = "empty-search">
            <h3>Unfortunately no rooms matched you search parameters</h3>
        </div>
    } else {
        roomsList = <section className = "roomslist">
            <div className = "roomslist-center">
                {
                    props.rooms.map((item, index) => {
                        return <Room key = {index} room = {item}/>;
                    })
                }
            </div>
        </section>
    }
    return roomsList;
};

export default RoomsList;