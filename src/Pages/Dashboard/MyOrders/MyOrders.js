import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>PAYMENT</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={booking.img} alt='prouct img'/>
                                    </div>
                                    </div>
                                </td>
                                <td>{booking.tvModel}</td>
                                <td>{booking.resalePrice}</td>
                                <td>{booking.resalePrice}</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;