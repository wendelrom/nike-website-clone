import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="img" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className="text-coral-red"> Exclusive </span>
          Opportunity
          <br />
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Discover a shopping adventure that elevates your experience with unmatched offers. Dive into a world of premier choices and remarkable savings, where value reigns supreme.        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Explore a realm crafted to satisfy your individual tastes, exceeding even the highest expectations. Your experience with us is guaranteed to be nothing less than extraordinary."        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-coral-red" textColor="text-coral-red"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer