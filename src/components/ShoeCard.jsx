
const ShoeCard = ({ imgURL, changeBigShoesImage, bigShoeImg}) => {

    const handleCLick = () => {
        if(bigShoeImg !== imgURL.bigShoe) {
            changeBigShoesImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleCLick}> {/*uses ternary operator that returns border-coral-red if its true otherwise border-transparent if false*/}
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt="img" width={127} height={103} className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard
