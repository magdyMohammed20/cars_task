function InfoCard({ backColor, icon, title, children }) {
    return (
        <div className={`rounded-2xl h-96 overflow-hidden shadow text-center py-8 ${backColor ? backColor : 'bg-white'} ${backColor && 'text-white'}`}>
            <div className={`w-12 h-12 flex rounded-full justify-center items-center mx-auto ${backColor ? 'bg-gray-100 bg-opacity-25' : 'bg-gray-400 bg-opacity-25'}`}>
                <i className={`${icon} fa-lg ${backColor ? 'text-white' : 'text-black'}`}></i>
            </div>
            <div className="px-6 my-8">
                <div className="font-bold text-2xl mb-2">
                    {title}
                </div>
            </div>
            {children}
        </div>
    )
}

export default InfoCard