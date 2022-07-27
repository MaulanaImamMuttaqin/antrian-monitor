import { useQuery } from 'react-query'
import { request } from '../lib/axios/axios'
import PatientsList from './PatientsList'

const fetch_patients = () => {
    return request({ url: 'api/antrian_poli' })
}

const Fetch_Patients_Data = () => {
    return useQuery('patients', fetch_patients, {
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
        select(data) {
            return data.data
        }
    })
}

function Body() {

    const { data: patients, isLoading } = Fetch_Patients_Data()

    return (
        <div className='h-screen flex flex-col pt-16 gap-2'>
            {isLoading ?
                <div className='h-full center'>
                    ...Loading
                </div> :
                <>
                    <div className="h-1/4 text-gray-200 font-thin shadow-lg  m-3 rounded-lg center gap-5 text-2xl bg-gradient-to-l from-blue-600 to-blue-400">
                        <div className=' center-y gap-3'>
                            <p>Validasi Resep</p>
                            <p>Penyerahan Resep</p>
                        </div>
                        <div className=' center-y gap-3'>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className=' center-y gap-3'>
                            <p>2022105190001 2022/05/19/00002 RANGGA ARYA YUDHA</p>
                            <p>2022105100001 2022/05/10/00001 NURDIN</p>
                        </div>

                    </div>
                    <PatientsList patients={patients} />
                </>


            }

        </div>
    )
}

export default Body