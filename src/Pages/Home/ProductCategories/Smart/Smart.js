import React, { useEffect, useState } from 'react';
import BookingModal from '../../../Booking/BookingModal/BookingModal';
import TvCard from '../Crt/TvCard';

const Smart = () => {
    const [tvs, settvs] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/smartTvCollection')
        .then(res => res.json())
        .then(data => settvs(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">SMART TV</p>
                <h2 className="text-5xl font-semibold">Our SMART TV Collection</h2>
                <p>We sell & buy good qualitiful SMART TV with a good deal.</p>
            </div>
            <div>
                {/* <h2>services: {services.length}</h2> */}
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        tvs.map(tv => <TvCard
                            key={tv._id}
                            tv={tv}
                            setProduct={setProduct}
                        ></TvCard>)
                    }
                </div>
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Smart;