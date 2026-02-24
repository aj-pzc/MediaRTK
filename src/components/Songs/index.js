import React, {Component} from 'react';

class SongInfo extends Component {
    
    componentDidMount() {
        console.log(`La canción "${this.props.title}" se ha cargado correctamente`);
    }

    render() {
        const { title, artist, duration } = this.props;
        return (
            <div className="song-container">
                <h2 className="song-title">{title}</h2>
                <p className="song-artist">{artist}</p>
                <p className="song-duration">{duration}</p>
            </div>
        );
    }
}



export default SongInfo;