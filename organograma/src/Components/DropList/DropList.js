const DropList = ({data,label,necessary,value,onChange}) => {
    return (
        <div className="h-fit w-full flex flex-col items-start">
            <label className="text-[#537FE7] text-md font-semibold pb-1">{label}</label>
            <select value={value} onChange={event => onChange(event.target.value)} required={necessary} className='w-[100%] bg-[#E9F8F9] shadow-md border-0 text-md outline-none p-3 rounded-md box-border mb-3'>
                <option value="" disabled hidden>Selecione uma opção</option>
                {
                    data.map(item => {
                        return (
                            <option key={item.carClass}>{item.carClass}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default DropList