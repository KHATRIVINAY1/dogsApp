const  Loading =()=>{
    return <div className="container d-flex align-items-center justify-content-center flex-column">
            <h2>Loading</h2>
            <div>
                <div className="spinner-grow text-primary" role="status">
                <span>L... </span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                <span>O...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                <span>A...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                <span>D...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                <span>I...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span>N...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                <span>...</span>
                </div>
            </div>
    </div>
}

export default Loading