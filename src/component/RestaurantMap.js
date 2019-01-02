import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker'

class RestaurantMap extends Component {
    constructor(props){
        super(props);
        this.state={
            posts: this.props.posts,
        }
        this.onChildClick=this.onChildClick.bind(this);
    }

    static defaultProps = {
        center: {
            lat: 35.233420,
            lng: 129.079478
        },
        zoom: 15,
    };

    onChildClick(e){
        alert(this.props.info[e].name+", "+this.props.info[e].point);
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDh_rXUS6cI-gtHnlH7h4Xykod4b72KBh0" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}

                    onChildClick={this.onChildClick}
                >

                    {
                        this.props.info.map((value,idx)=>{
                            let color;
                            switch(value.point){
                                case 1: default: color="blue"; break;
                                case 2: color="yellow"; break;
                                case 3: color="red"; break;
                            }

                            return(
                                <MyMarker
                                    lat={value.lat}
                                    lng={value.lng}
                                    string={value.name}
                                    point={color}
                                    key={idx}
                                />
                            )
                        })
                    }
                </GoogleMapReact>
            </div>
        );
    }
}

export default RestaurantMap;
