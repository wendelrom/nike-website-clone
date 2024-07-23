import { star } from '../assets/icons/index'

const PopularProductCard = ({ key, imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <div className='overflow-hidden rounded-3xl' width={250} height={250}>
            <img src={imgURL} className='hover:scale-110 ease-out duration-300 rounded-3xl w-full' alt="shoe" />
        </div>
        <div className="mt-8 flex justify-start gap2.5">
            <img src={star} alt="rating"  width={24} height={24}/>
            <p className='font-montserrat text-slate-gray text:xl'>(4.8)</p>
        </div>
        <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard