import v1 from '../assets/images/v1.png'
import v2 from '../assets/images/v2.png'
import v3 from '../assets/images/v3.png'
import v4 from '../assets/images/v4.png'

function Card({ img, name, recommend_percentage, background, users, price }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow px-4 py-5" style={{ backgroundColor: background }}>
            <p className='flex'>
                <img src={v4} className="mr-2" alt="v4" />
                <span className="font-extrabold text-gray-700 ml-1">{recommend_percentage}% Recommended</span>
            </p>
            <img className="w-52 h-28 mx-auto my-2" src={img} alt={name} />
            <div className="px-6 ">
                <div className="font-bold text-xl mb-2">
                    {name}
                </div>
            </div>
            <div className="card-footer mt-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className='flex items-center'>
                        <img src={v3} className="mr-2 h-4" alt="user" />
                        {users}
                    </div>

                    <div className="mx-4">
                        <img src={v1} alt="v1" />
                    </div>
                    <div>
                        <img src={v2} alt="v2" />
                    </div>
                </div>
                <div>
                    <span className="font-extrabold text-gray-700">
                        {price}$ <span className="font-normal">/ h</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card