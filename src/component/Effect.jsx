import ButtonItem from './ButtonItem'
import React from 'react'

const Effect = () => {
    const [count, setCount] = React.useState(0)
    const [title, setTitle] = React.useState('')
    const amountRef = React.useRef()
    const maxRef = React.useRef(false)
    const HandleCount = () => {
        if (!maxRef.current) {
            if (count >= 10) {
                maxRef.current = true;
            } else {
                setCount(el => el + parseInt(amountRef.current.value || 1))
            }
        } else { console.log(amountRef.current) }
    }
    
    React.useCallback(HandleCount, [setCount])
    const handleReset = () => setCount(el => {
        maxRef.current = 0
        return el *= 0;
    })
    const handleTitle = () => setTitle(document.title)
    React.useEffect(() => amountRef.current.focus())
    React.useEffect(() => {
        console.log('h1')
        document.title = ''
        return () => console.log('clean')
    }, [title])
    React.useEffect(() => {
        console.log('h2')
        document.title = `number of click = ${count}`
    }, [count])
    const listOfCount = [1, 3, 23, 25, 50]
    const listBack = React.useCallback((n) => setCount(el => el + n), [setCount])
    return (
        <div>
            <div className="text-center bg-teal-800 text-teal-100 p-3">
                <div>{count}</div>
                {listOfCount.map(
                    el => {
                        return (<ButtonItem
                            // counterFn={() => setCount(count+el)} 
                            counterFn={listBack}
                            label={el}
                            n={el}
                            key={el} className='inline' />)
                    })

                }
                {/* <button onClick={HandleCount} className='border-2 p-3 px-[100px] m-2 hover:bg-teal-600 '>add</button>
                <div>{title}</div> */}
                <ButtonItem label='add' counterFn={HandleCount} />
                <button onClick={handleTitle} className='border-2 p-3 px-[100px] m-2 hover:bg-teal-600 '>change title</button>
                <br />
                <button onClick={handleReset} className='border-2 p-3 px-[100px] m-2 hover:bg-teal-600 '>reset</button>
                <input type="text" ref={amountRef} />
            </div>

        </div>
    )
}

export default Effect

