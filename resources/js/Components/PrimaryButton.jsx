export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-xl border border-transparent bg-[#f2650b] px-5 py-2.5 text-sm font-bold text-white transition duration-150 ease-in-out hover:bg-[#ea580c] focus:bg-[#ea580c] focus:outline-none focus:ring-2 focus:ring-[#f2650b] focus:ring-offset-2 active:scale-[0.99] shadow-md shadow-orange-500/20 ${
                    disabled && 'opacity-50 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
