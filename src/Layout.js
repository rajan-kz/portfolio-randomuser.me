import { useState, useEffect } from 'react'
import axios from 'axios'

const Layout = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = function () {
        axios.get('https://www.randomuser.me/api')
            .then(res => {
                setData(res.data.results[0])
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div className="bg-curveBackground bg-cover flex align-center justify-center h-screen">
                    <div className="shadow-2xl bg-gradient-to-r from-gray-200 to-gray-300 w-3/5 rounded-2xl truncate m-9">
                        <div className="flex justify-center pt-10 ">
                            <img className="rounded-full h-32 truncate m-0" src={data.picture.large} alt={data.name.first} />
                            <div className="ml-20 flex flex-col">
                                <span className="text-2xl font-bold pt-5">{data.name.first} {data.name.last}</span>
                                <span className="pt-3">{data.dob.age}, {data.gender}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 pt-12 gap-5 m-8 mx-24">
                            <div className="flex justify-start">
                                <div className="flex flex-col ml-10">
                                    <span><span className="font-bold">Username: </span>{data.login.username}</span>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex flex-col ml-10">
                                    <span><span className="font-bold">DOB: </span>{formatDate(data.dob.date)}</span>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex flex-col ml-10">
                                    <span><span className="font-bold">Password: </span>{data.login.password}</span>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex flex-col ml-10">
                                    <span><span className="font-bold">Registered: </span>{formatDate(data.registered.date)}</span>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex flex-col ml-10">
                                    <span className="font-bold">Address: </span>
                                    <span>{data.location.street.number} {data.location.street.name},</span>
                                    <span>{data.location.city}, {data.location.state},</span>
                                    <span>{data.location.country}, {data.location.postcode}</span>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="flex flex-col ml-10">
                                    <span className="font-bold">Contact Info: </span>
                                    <span>{data.email}</span>
                                    <span>{data.phone}</span>
                                    <span>{data.cell}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="absolute bottom-2 right-2">
                        <button className="bg-grey-700 hover:bg-grey-300 text-white py-2 px-2 rounded-full" onClick={getData}><RefreshIcon/></button>
                    </div>
                </div>
            }
        </div>
    )
}

const RefreshIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
        </svg>
    )
}

const formatDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString()
}
        
export default Layout
