import { useContext } from "react"
import BSkyButton from "../../../UI/buttons/BSkyButton"
import { ThemeContext } from "../../../context/themeContext"


 function LatestEpisodeCard({cardData}) {

    const {theme} = useContext(ThemeContext)
    
  return (
    <div className={`rounded-4xl p-10 flex gap-13.25 ${theme === "light" ? "bg-green-400 " : "bg-black "}`}>
        <img src={cardData.img} alt="" className="max-w-97.5 max-h-116.25 object-cover" />

        <div>
            <span className="text-white text-[18px] font-normal bg-[#191919] p-[4px_16px] rounded-md">{cardData.tag}</span>
            <p className="text-b-sky text-[17px] font-normal mt-12 mb-4.5">Eposode {cardData.episode}</p>
            <h5 className="text-white text-[64px] font-normal leading-[1.1]">{cardData.title}</h5>
            <p className="text-[#FFFFFFB2] text-[22px] font-normal mt-7 mb-4.5 leading-[1.1]">{cardData.description}</p>
            <BSkyButton>
                View Episode Details
            </BSkyButton>
        </div>
    </div>
  )
}


export default LatestEpisodeCard