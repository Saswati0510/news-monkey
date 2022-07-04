import React from 'react'
const NewsItem=(props)=>{

        let { title, description, imageUrl, newsUrl, author, date,source } = props;
        /*   let d=new Date(date).toUTCString;
          console.log(d); */
        return (
            <div className='my-3'>
                <div className="card" style={{ width: '100%' }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://cdn.thewire.in/wp-content/uploads/2022/06/03072435/The_Daya_Bay_Antineutrino_Detector_8056998030-scaled.jpg"} className="card-img-top" style={{ width: '100%', height: '250px' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.slice(0, 40) : ''}...</h5>
                        <p className="card-text">{description ? description.slice(0, 88) : ''}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {date}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}
export default NewsItem