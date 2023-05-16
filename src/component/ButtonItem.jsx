// eslint-disable-next-line react/prop-types
const ButtonItem = ({counterFn,label,n}) => {
    return (
        <div>
            <button onClick={()=>counterFn(n)} className='border-2 p-3 m-2 hover:bg-teal-600 '>{label}</button>
        </div>
    );
}

export default ButtonItem
