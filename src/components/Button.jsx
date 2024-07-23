const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-xl leading-none
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor} hover:bg-coral-red hover:text-white` : `bg-coral-red text-white hover:bg-transparent hover:border-coral-red hover:text-coral-red`}
    rounded-full  ease-in duration-200 ${fullWidth && 'w-full'}`} >
        {label}
        {iconURL && <img src={iconURL} alt="img" className="ml-2 rounded-full"/>}   {/* { iconURL && } = use to check if it has an icon then display, if not then do not display alt*/}
    </button>
  )
}

export default Button