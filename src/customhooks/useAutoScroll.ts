import { RefObject, useEffect, useState } from 'react'

function useAutoScroll(refs: RefObject<HTMLDivElement>, interval: number) {
    const [currentPos, setCurrentPos] = useState<number>(0)

    useEffect(() => {
        const element = refs.current

        const tableHeight = element?.childElementCount! * element?.firstElementChild?.clientHeight!
        const totalVisibleRow = Math.floor(element?.clientHeight! / element?.firstElementChild?.clientHeight!)
        const scrollHeight = totalVisibleRow * element?.firstElementChild?.clientHeight!

        const id = setInterval(() => {
            if (currentPos < tableHeight!) { // kalau belum di akhir tabel scroll pake animasi
                refs.current?.scrollTo({
                    top: currentPos === 0 ? scrollHeight! : currentPos,
                    behavior: 'smooth'
                })
                setCurrentPos(currentPos + scrollHeight!)
            } else { // kalau udah di akhir tabel scroll ke atas tabel tanpa animasi biar cepet
                refs.current?.scrollTo({ top: 0 })
                setCurrentPos(scrollHeight!)
            }

        }, interval * 1000);

        return () => {
            clearInterval(id);
        }
    }, [currentPos]);


}

export default useAutoScroll