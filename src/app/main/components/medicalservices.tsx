import NextImage from "./../../../../Components/imagemaker";
import s1 from "../../../../public/medicalservices/1.svg";
import s2 from "../../../../public/medicalservices/2.svg";
import s3 from "../../../../public/medicalservices/3.svg";
import s4 from "../../../../public/medicalservices/4.svg";
import s5 from "../../../../public/medicalservices/5.svg";
import s6 from "../../../../public/medicalservices/6.svg";
import s7 from "../../../../public/medicalservices/7.svg";
import s8 from "../../../../public/medicalservices/8.svg";

const services = [
  {
    image: s1,
    name: "چک کردن اسید خاک",
    disc: "با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود",
  },
  {
    image: s2,
    name: " برسی مواد معدنی خاک ",
    disc: "  یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود ",
  },
  {
    image: s3,
    name: "مشاهده بهترین دما  ",
    disc: "  از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود ",
  },
  {
    image: s4,
    name: "  برسی آسیب های احتمالی",
    disc: "  تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود ",
  },
  {
    image: s5,
    name: "  از بین بردن عناصر آلوده خاک",
    disc: " با استفاده از روش های نوین،عناصر آلوده از خاک گیاهان شما جمع آوری میشوند  ",
  },
  {
    image: s6,
    name: " برسی ظاهر ",
    disc: "  ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد ",
  },
  {
    image: s7,
    name: "اندازه گیری EC   ",
    disc: "   این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد",
  },
  {
    image: s8,
    name: " ارائه مکمل  ",
    disc: " برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد  ",
  },
];

const Medicalservices = () => {
  return (
    <>
      <h2 className="font-bold text-xl my-9 text-green-800 mt-30">
        خدمات گیاه پزشکی
      </h2>

      <div className="w-full flex justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
             
              className="flex items-center gap-3  rounded-2xl    transition bg-white"
            >
              <div className="bg-green-100 flex  aspect-square rounded-full items-center justify-center"  style={{ width: "68px" ,height:'68px'}}>
                <NextImage
                  url={item.image}
                  width={32}
                  height={32}
                 
                />
              </div>
              <div className="xl:w-2/3 flex flex-col gap-2">

              <h3 className="font-bold text-center">{item.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                {item.disc}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Medicalservices;
