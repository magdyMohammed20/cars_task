import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import BookingCard from '../../../components/BookingCard'
import Filtering from '../../../components/Filtering'
function Booking({ cars }) {
    const [isLoading, setIsLoading] = useState(true)
    const [filterBooking, setFilterBooking] = useState([])

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <div className='p-1'>
            {
                isLoading && <LoadingOverlay>
                    Loading...
                </LoadingOverlay>
            }
            <div className='container p-6 '>
                <div className='mt-5'>
                    <h2 className='text-2xl text-dark font-bold'>Booking</h2>
                </div>

                <Filtering cars={cars} filterBooking={filterBooking} setFilterBooking={setFilterBooking} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                    {
                        filterBooking.length > 0 ? filterBooking?.map(({ id, name, img, recommend_percentage, users, price, type }) =>
                            <BookingCard
                                name={name}
                                img={img}
                                recommend_percentage={recommend_percentage}
                                users={users}
                                price={price}
                                type={type}
                                key={id}
                            />) : cars?.map(({ id, name, img, recommend_percentage, users, price, type }) =>
                                <BookingCard
                                    name={name}
                                    img={img}
                                    recommend_percentage={recommend_percentage}
                                    users={users}
                                    price={price}
                                    type={type}
                                    key={id}
                                />)
                    }

                </div>
            </div>
        </div>
    )
}

export default Booking
