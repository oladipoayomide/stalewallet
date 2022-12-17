
const StoreTemp = ({store, path}) => {
    return (
        <button className="flex flex-row items-center btn-2 min-h-45px min-w-[9.4rem] px-3">

            <img src={`${path}`} alt="icon" className="myBox me-2" />
            <div className=" py-0 text-left my-0">
                <p className="  text-[9px]">Download from </p>
                <p className="py-0 my-0 text-sm">{store}</p>
            </div>


        </button>
    );
}

export default StoreTemp;