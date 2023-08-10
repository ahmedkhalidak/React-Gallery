import React, { Component } from 'react';
import axios from 'axios';
import Numbers from './Numbers';


class photo extends Component {
    state = {
        photos: [],
        min: 0,
        max: 6 
    }
    nextphoto = (next) => {
        const { min, max, photos } = this.state;
        const totalphotos = photos.length;
    
        if (next) {
            if (max + 6 <= totalphotos) {
                this.setState({ 
                    min: min + 6,
                    max: max + 6
                });
            } else {
                this.setState({ 
                    min: 0,
                    max: 6
                });
            }
        } else {
            if (min - 6 >= 0) {
                this.setState({
                    min: min - 6,
                    max: max - 6
                });
            } else {
                const newMin = (totalphotos-6)
                this.setState({
                    min: newMin,
                    max: totalphotos
                });
            }
        }
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                const first100photos = res.data.slice(0, 102); 
                console.log(first100photos);
                this.setState({ photos: first100photos });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { photos, min, max } = this.state;

        const photoCards = photos.slice(min, max).map((photo, index) => (
          <div className="col-md-4 mb-4 col-sm-6 col-12" key={photo.id}>
            <div className="card" style={{ height: '100%' }}>
              <img src={photo.url} className="card-img-top" alt={photo.title} />
              <div className="card-body bg-dark text-white rounded p-3 d-flex flex-column justify-content-between">
                <div>
                  <p className="card-text">{photo.title}</p>
                </div>
                <div>
                  <p className="card-text font-weight-bold fs-4 border-bottom pb-2 mb-2">
                    Card ID: {index + min + 1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ));
        

        return (
            <div className=" container "> 
                   <h1 className="text-light text-start mt-5 pt-3">New Releases</h1> 
                   <hr  className='text-light'/>
                   <Numbers currentIndex={min} totalPhotos={photos.length} />
                <button className="btn btn-primary m-5" onClick={() => this.nextphoto(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill mr-2 " viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg> Previous</button>
                <button className="btn btn-primary m-5" onClick={() => this.nextphoto(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill ml-2" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>Next</button>
                
                
    <div className="row justify-content-center"> 
                    {photoCards}
                </div>
            </div>
        );
    }
}

export default photo;
