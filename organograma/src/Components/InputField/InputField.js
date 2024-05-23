const InputField = ({ label, placeholder, necessary, value, onChange, className }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="h-fit w-full flex flex-col items-start">
            <label className="text-[#537FE7] text-md font-semibold pb-1">{label}</label>
            <input 
                value={value} 
                onChange={handleChange} 
                required={necessary} 
                type="text" 
                placeholder={placeholder} 
                className="w-[100%] bg-[#E9F8F9] shadow-md border-0 text-md outline-none p-3 rounded-md box-border mb-3"
            />
        </div>
    );
}

export default InputField;