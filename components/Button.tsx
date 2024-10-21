export const Button = (props:React.PropsWithChildren) => {
    return (
        <button
            className="relative py-2 px-3 rounded-lg  font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0_0_12px_#8c45ff] hover:shadow-[0_0_15px_#9f61ff] transition-shadow duration-300"
        >
            <div className="absolute inset-0">
                <div className="border border-white/20 absolute inset-0 mask-gradient rounded-lg"></div>
                <div className="border absolute inset-0 border-white/40 mask-gradient rounded-lg"></div>
            </div>
            <span className="relative">{props.children}</span>
        </button>
    )
}

export default Button