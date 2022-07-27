import { useEffect, useState } from 'react'

function useDateTime() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return dateTime;
}

export default useDateTime