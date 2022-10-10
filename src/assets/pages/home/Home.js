import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import InfoCard from '../../../components/InfoCard'
import Card from '../../../components/Card'

function Home({ cars }) {
    const [isLoading, setIsLoading] = useState(true)

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
            <div className='container px-6'>
                <div className='mt-5'>
                    <h2 className='text-2xl text-dark font-bold'>Dashboard</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <InfoCard backColor="bg-purple-700" title="The Coldest Sunset" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." icon="fa fa-star">
                        <div role="progressbar1" className="mx-auto" valuenow="65" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </InfoCard>
                    <InfoCard title="The Coldest Sunset" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." icon="fa fa-star">
                        <div role="progressbar2" className="mx-auto" valuenow="65" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </InfoCard>
                    <InfoCard title="The Coldest Sunset" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." icon="fa fa-star">
                        <div role="progressbar3" className="mx-auto" valuenow="65" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </InfoCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">

                    {
                        cars?.map(({ id, name, img, recommend_percentage, background, users, price }) =>
                            <Card
                                name={name}
                                img={img}
                                recommend_percentage={recommend_percentage}
                                users={users}
                                background={background}
                                price={price}
                                key={id}
                            />)
                    }


                </div>
            </div>
        </div>
    )
}

export default Home
