import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';


class SingleRoom extends Component {
    state = {
        slug: this.props.match.params.slug,
        defaultImg
    };

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>;
        }

        return (
            <>
                <StyledHero img={room.images[0]}>
                    <Banner title={`${room.name} room`}>
                        <Link to="/rooms" className="btn-primary">back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className = "single-room">
                   <div className = "single-room-images">
                       {room.images.map((item, index) => {
                           return <img key = {index} src = {item} alt = {room.name}/>
                       })}
                   </div>
                   <div className = "single-room-info">
                       <article className = "desc">
                           <h3>Details</h3>
                           <p>{room.description}</p>
                       </article>
                       <article className = "info">
                           <h3>Info</h3>
                           <h6>Price: ${room.price}</h6>
                           <h6>Size: {room.size} SQFT</h6>
                           <h6>Max Capacity: {room.capacity > 1 ? `${room.capacity} People`: `${room.capacity} Person`}</h6>
                           <h6>{room.pets ? "Pets Allowed": "No Pets Allowed"}</h6>
                           <h6>{room.breakfast && "Free Breakfast Included"}</h6>
                       </article>
                   </div>
                </section>
                <section className = "room-extras">
                    <h6>Extras</h6>
                    <ul className = "extras">
                        {room.extras.map((item, index) => {
                            return <li key = {index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;