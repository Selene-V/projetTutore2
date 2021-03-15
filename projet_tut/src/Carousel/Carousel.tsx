import React from "react";

const Carousel = () => {

    return (
        <div className="carousel relative shadow-2xl bg-white">
            <div className="carousel-inner relative overflow-hidden w-full">

                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" checked={true} hidden={true}/>
                <div className="carousel-item absolute opacity-0 carousel_size">
                    <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
                        <img src="https://marketing-nova.com/wp-content/uploads/2020/10/1200x630wa.png"
                             alt="test"/>
                    </div>
                </div>
                <label htmlFor="carousel-3"
                       className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-2"
                       className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden={true}/>
                <div className="carousel-item absolute opacity-0 carousel_size">
                    <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
                        <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.jpg"
                             alt="test"/>
                    </div>
                </div>
                <label htmlFor="carousel-1"
                       className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-3"
                       className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden={true}/>
                <div className="carousel-item absolute opacity-0 carousel_size">
                    <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
                        Slide 3
                    </div>
                </div>
                <label htmlFor="carousel-2"
                       className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-1"
                       className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-1"
                               className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-2"
                               className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-3"
                               className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                </ol>
            </div>
        </div>
    );
}
export default Carousel;
