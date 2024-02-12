import React, { Component } from 'react'


export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, Newsurl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1',left:"83%"}}>
            {source}</span>
          <img src={!imageurl ? "https://images.indianexpress.com/2023/12/Hubble-space-telescope-20231201.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
            <a rel='noreferrer' href={Newsurl} target='blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
