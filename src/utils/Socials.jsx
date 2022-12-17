import { socialsData } from "../constants";

const Socials = () => {
    return (
        <>
            <div className="flex flex-row gap-3">
                {socialsData.map(item => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div key={item.id} className="social cursor-pointer h-[27px] w-[27px] flex items-center justify-center ">
                            <img src={item.path} alt="social" className={`${item.size} myIcon`} /></div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Socials;