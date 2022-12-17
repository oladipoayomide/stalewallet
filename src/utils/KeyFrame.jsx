const KeyFrame = ({ text, text1, text2, text3, text4 }) => {

   const texts = [
      "TRX $0.06329000 (+2.30%)",
      " ETH $1,620.09 (+5.82%)",
      "GAL $2.39 (-6.86%)",
      "DOT $6.78 (+5.62%)",
      " DOGE $0.12 (+0.13%)"
   ]

   return (
      <div className="keyframe container-fluid h-[60px] items-center 
      flex flex-row gap-10
      ">
         {texts.map((item, index)=>(
            <h3 className="block text-xl" key={index}>{item}</h3>
         ))}



      </div>
   );
}

export default KeyFrame;