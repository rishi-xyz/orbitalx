export const HomeButton = (props: React.PropsWithChildren<{ onClick: () => void }>) => {
    return (
        <button
            onClick={props.onClick}
            className="relative py-2 px-3 rounded-lg w-32 h-10 font-medium text-sm bg-gradient-to-b from-[#130a1e] to-[#171a52] shadow-[0_0_12px_#8c45ff] hover:shadow-[0_0_15px_#9f61ff] transition-shadow duration-300  hover:scale-110"
        >
            <div className="absolute inset-0">
                <div className="border border-purple-900 absolute inset-0 mask-gradient rounded-lg"></div>
                <div className="border absolute inset-0 border-white/40 mask-gradient rounded-lg"></div>
            </div>
            <span className="relative">{props.children}</span>
        </button>
    )
}

export default HomeButton