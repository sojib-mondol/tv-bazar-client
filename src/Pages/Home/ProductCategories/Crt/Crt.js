import React, { useEffect, useState } from 'react';

const Crt = () => {

    const [tvs, settvs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/crtTvCollection')
        .then(res => res.json())
        .then(data => settvs(data))
    }, [])

    return (
        <div>
            <h2>this is crt</h2>
             <h2>services: {tvs.length}</h2>
        </div>
    );
};

export default Crt;