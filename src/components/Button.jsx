

const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat leading-none border ${backgroundColor ? `${backgroundColor}${borderColor} ${textColor}` : 'border-coral-red bg-coral-red text-white'}  rounded-full ${fullWidth && 'w-full'} `}>
        {label}
        {iconURL && <img src={iconURL} alt="arrow" className="ml-2 rounded-full h-5 w-5" /> }
    </button>
  )
}

export default Button