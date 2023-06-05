import React from 'react'

function Navbar(props) {

    function handleSearch() {
        props.setLoading(true);
        props.setResult();
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
            <nav className="navbar bg-[#1D7874] font-bold mb-3">
                <div className="container-fluid">
                    <h2 className="navbar-brand text-[#EDF7F6] hover:text-[#EDF7F6] font-xl">SocialX</h2>
                        <button className="btn bg-[#EDF7F6] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#EDF7F6]" type="submit" onClick={handleSearch}>
                            Search
                        </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
