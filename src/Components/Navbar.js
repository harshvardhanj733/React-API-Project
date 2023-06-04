import React from 'react'

function Navbar(props) {

    function handleSearch() {
        props.setLoading(true);
        setTimeout(async ()=>{
            const response = await fetch('https://reqres.in/api/users?page=1');
            const response_json = await response.json();
            const res = response_json.data;
            props.setResult(res);
            props.setLoading(false);
        }, 2000);
      }

    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">SocialX</a>
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
                            Search
                        </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
