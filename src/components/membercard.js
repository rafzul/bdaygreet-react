const Cards = ({props}) => {
   return(
       <div className="flex flex-wrap md:flex-nowrap items-center mx-2 md:mx-4 mt-8 mb-8 bg-yellow-100 hover:bg-yellow-200 border-black border rounded-lg shadow-solid-primary w-full md:w-4/5 center transform duration-500 scale-100 hover:scale-105">
           <div className="m-2 md:m-8 border-black border ">
                <img className="w-36 md:w-36"  src={props.photo}></img>
           </div>
           <div className="block font-mono h-full p-2 md:p-8 w-full">
               <p className="text-lg font-bold md:text-2xl">{props.name}</p>
               <p className="text-sm md:text-lg">3 Dec 2021</p>
               {/* <hr className="border-black"></hr> */}
               <p className="flex flex-wrap text-base w-4/5">{props.message}</p>
           </div>
       </div>
   )

}

export default Cards