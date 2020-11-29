import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
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
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);

        if(!room) {
            return <div className = "error">
                <h3>no such room could be found...</h3>
                <Link to = "/rooms" className = "btn-primary">
                    back to rooms
                </Link>
            </div>;
        }

        return (
           <StyledHero img = {room.images[0]}>
               <Banner title = {`${room.name} room`}>
                   <Link to = "/rooms" className = "btn-primary">back to rooms</Link>
               </Banner>
           </StyledHero>
        );
    }
}

export default SingleRoom;