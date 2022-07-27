import React, { useEffect, useRef } from "react";
import useAutoScroll from "../customhooks/useAutoScroll";

type patient = {
    no_rawat: string,
    nama_pasien: string,
    no_antrian: string,
    no_resep: string,
    verifikasi: string
}


const PatientsList = ({ patients }: { patients: Array<patient> }) => {
    const patientsRef = useRef<HTMLTableSectionElement>(null)
    useAutoScroll(patientsRef, 5) // useAutoScroll(ref dari element yang mau di scroll, interval(detik))

    return (
        <div className="h-3/4  rounded-lg m-3 relative overflow-hidden">
            <div className="overflow-x-auto relative h-full">
                <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-200 uppercase bg-blue-400 ">
                        <tr>
                            <th className="py-3 px-1 text-center w-14">
                                No
                            </th>
                            {Object.keys(patients[0]).map((key) =>
                                <th key={key} className="py-3 px-6 text-center ">
                                    {key}
                                </th>
                            )}

                        </tr>
                    </thead>
                    <tbody ref={patientsRef} className="h-[90%]">
                        {patients.map((p, i) => <Patient key={i} patient={p} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


const Patient = React.memo(({ patient }: { patient: patient }) => {
    return (
        <tr className="border-b text-center text-gray-900 ">
            <td className="py-4 px-1  text-center w-14 font-bold"></td>

            {Object.values(patient).map((value) =>
                <td scope="row" className="py-4 px-6 ">
                    {value}
                </td>
            )}
        </tr>
    )
})

export default PatientsList;