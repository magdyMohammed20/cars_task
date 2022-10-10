function BookingCard({ img, name, background, users, price, type }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow px-4 py-5" style={{ backgroundColor: background }}>
            <p className="text-lg font-extrabold">
                {name}
            </p>
            <p className="my-1 text-gray-500">
                Coupe
            </p>
            <img className="w-52 h-28 mx-auto my-2" src={img} alt={name} />

            <div className="card-footer mt-4 flex justify-between items-center">
                <div className="flex">
                    <div>
                        <i className="fa fa-user text-gray-600 mr-2"></i>
                        {users}
                    </div>

                    <div className="mx-4 text-gray-700">
                        <i className="fa fa-retweet text-gray-600 mr-2"></i>
                        {type}
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

export default BookingCard