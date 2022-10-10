import { useState } from 'react'

function Filtering({ cars, setFilterBooking }) {
    const [model, setModel] = useState('');
    const [modern, setModern] = useState('');

    const handleModern = (value) => {
        let filteredCars = []
        setModern(value)
        if (model !== '') {
            filteredCars = cars.filter(item => (item.modern === value && item.model === model))
        } else {
            filteredCars = cars.filter(item => item.modern === value)
        }
        setFilterBooking(filteredCars)
    }

    const handleModel = (value) => {
        setModel(value)
        let filteredCars = [];
        if (modern !== '') {
            filteredCars = cars.filter(item => (item.model === value && item.modern === modern))
        } else {
            filteredCars = cars.filter(item => item.model === value)
        }
        setFilterBooking(filteredCars)
    }

    return (
        <div className='my-6 flex justify-between flex-wrap'>
            <div className='my-3 flex'>
                <select name="modern" defaultValue="0" onChange={e => handleModern(e.target.value)} className="bg-white shadow-sm mr-4 cursor-pointer outline-none text-gray-900 rounded-full p-2.5 w-2/3">
                    <option value="0">Select Modern</option>
                    <option value="new">New</option>
                    <option value="old">Old</option>
                </select>

                <select name="model" defaultValue="0" onChange={e => handleModel(e.target.value)} className="bg-white shadow-sm cursor-pointer outline-none text-gray-900 rounded-full p-2.5 w-2/3">
                    <option value="0">Select Model</option>
                    <option value="toyota">Toyota</option>
                    <option value="audi">Audi</option>
                    <option value="bmw">BMW</option>
                </select>
            </div>

            <div className='flex my-3 ml-auto'>
                <button type="button" className="text-white w-12 h-12 mr-2 flex justify-center items-center rounded-full bg-indigo-500">
                    <i className='fa fa-th-large '></i>
                </button>
                <button type="button" className="text-white w-12 h-12 flex justify-center items-center rounded-full bg-indigo-500">
                    <i className='fa fa-sliders fa-lg'></i>
                </button>
            </div>
        </div>
    )
}

export default Filtering