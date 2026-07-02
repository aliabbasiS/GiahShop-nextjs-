import { FC } from "react"
import NextImage from '../../../../Components/imagemaker'
import arrow from "../../../../public/geradiantpictures/arrow_back.svg"

interface ImageType {
  url: string
  name: string
}

interface Props {
  images?: ImageType[] // optional so it won't throw error
}

const Gerdiantshopcart: FC<Props> = ({ images = [] }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-evenly w-full">
      {images.map((item, index) => (
        <div
          key={index}
          className="  shadow-lg hover:shadow-lg transition relative flex rounded-lg overflow-hidden  w-2/3 lg:w-1/5 md:w-1/4"
        >
          <NextImage classes="object-cover rounded-lg w-full" url={item.url} />
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute inset-0 flex flex-col justify-end z-20 p-6">
            <span className="text-2xl text-white font-bold">گیاه {item.name}</span>
            <button className="text-sidebar p-2 flex border w-fit my-3 rounded-lg">
            خرید گیاه  {item.name} 
              <NextImage width={24} height={24} url={arrow} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gerdiantshopcart