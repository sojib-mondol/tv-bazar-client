import React, { useEffect, useState } from 'react';
import TvCard from '../Crt/TvCard';

const Led = () => {

    const [tvs, settvs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ledTvCollection')
        .then(res => res.json())
        .then(data => settvs(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">LED TV</p>
                <h2 className="text-5xl font-semibold">Our LED TV Collection</h2>
                <p>We sell & buy good qualitiful LED TV with a good deal.</p>
            </div>
            <div>
                {/* <h2>services: {services.length}</h2> */}
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        tvs.map(tv => <TvCard
                            key={tv._id}
                            tv={tv}
                        ></TvCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Led;