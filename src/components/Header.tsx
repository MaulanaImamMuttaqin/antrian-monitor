import { days, month } from '../const/date_indo';
import { CalendarIcon, ClockIcon } from '@heroicons/react/solid'
import useDateTime from '../customhooks/useDateTime';
const Header = () => {
    const dateTime = useDateTime()

    return (
        <div className="bg-gradient-to-tr font-thin text-gray-300 from-blue-600 via-blue-400 to-blue-500 absolute h-16 shadow-lg flex justify-between px-10 w-screen z-50 rounded-b-lg">
            <div className='center text-4xl tracking-wide'>Antrian Farmasi</div>
            <div className="flex text-2xl gap-5">
                <div className='center gap-2'>
                    <CalendarIcon className='h-5 w-5' />
                    {`${days[dateTime.getDay() - 1]}, ${dateTime.getDate()} ${month[dateTime.getMonth()]} ${dateTime.getFullYear()}`}
                </div>
                <div className="center gap-2">
                    <ClockIcon className='h-5 w-5' />
                    {dateTime.toLocaleTimeString()}
                </div>
            </div>
        </div>
    )
}
export default Header;