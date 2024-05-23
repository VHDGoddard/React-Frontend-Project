const Button = ({children}) => {
    return (
        <button className="w-full h-fit flex justify-center bg-gradient-to-tr rounded-xl from-[#C0EEF2] to-[#9DB8F8] p-4 mt-2 text-[#010127] text-xl font-bold ring-2 ring-offset-1">
            {children}
        </button>
    );
}

export default Button