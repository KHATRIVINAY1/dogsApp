import { Link } from "react-router-dom";
const Error= ()=>{
    return <><section className="container">
                <div className="error-container">
                    <h1>Oop! No page found</h1>
                    <Link to="/" className= 'btn'>
                        Back to home page
                    </Link>
                </div>
    </section></>
}

export default Error;