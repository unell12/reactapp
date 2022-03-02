import React from "react";
import './Detail.css'

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        const { location } = this.props
        if(location.state){
            return <div className="box">
                <div className="title">
                    <em>{location.state.title}</em>
                </div>
                <div className="year">
                    {location.state.year}
                </div>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            </div>
        } else {
            return null;
        }
    }
}

export default Detail;