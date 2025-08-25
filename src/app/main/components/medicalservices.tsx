import NextImage from './../../../../Components/imagemaker'
import s1 from '../../../../public/medicalservices/1.svg'
import s2 from '../../../../public/medicalservices/2.svg'
import s3 from '../../../../public/medicalservices/3.svg'
import s4 from '../../../../public/medicalservices/4.svg'
import s5 from '../../../../public/medicalservices/5.svg'
import s6 from '../../../../public/medicalservices/6.svg'
import s7 from '../../../../public/medicalservices/7.svg'
import s8 from '../../../../public/medicalservices/8.svg'

const services = [
  { image: s1, name: 'چک کردن اسید خاک', disc: 'با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود' },
  { image: s2, name: 'خدمت شماره ۲', disc: 'توضیح خدمت شماره ۲' },
  { image: s3, name: 'خدمت شماره ۳', disc: 'توضیح خدمت شماره ۳' },
  { image: s4, name: 'خدمت شماره ۴', disc: 'توضیح خدمت شماره ۴' },
  { image: s5, name: 'خدمت شماره ۵', disc: 'توضیح خدمت شماره ۵' },
  { image: s6, name: 'خدمت شماره ۶', disc: 'توضیح خدمت شماره ۶' },
  { image: s7, name: 'خدمت شماره ۷', disc: 'توضیح خدمت شماره ۷' },
  { image: s8, name: 'خدمت شماره ۸', disc: 'توضیح خدمت شماره ۸' },
]

const Medicalservices = () => {
  return (
    <>
      <h2 className="font-bold text-xl my-9 text-green-800 mt-30">
        خدمات گیاه پزشکی
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-white"
            >
              <NextImage url={item.image} classes="w-16 h-16 mb-3" />
              <h3 className="font-bold text-center">{item.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{item.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Medicalservices
