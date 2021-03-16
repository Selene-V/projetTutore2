import React from "react";
import "./Carousel.css"

const Carousel = (props: { img: any; }) => {
    console.log(props.img);

    return (
        <div className="carousel relative shadow-2xl bg-white">
            <div className="carousel-inner relative overflow-hidden">
                {
                    () => {
                        let value = "aaaaa";
                        for (let i in props.img) {
                            value += (i: number) => (
                                <div>
                                    <input className="carousel-open" type="radio" id={"carousel-" + i} name={"carousel"}
                                           checked={true}
                                           hidden={true}/>
                                    <div className="carousel-item absolute opacity-0 carousel_size flex items-start">
                                        <div
                                            className="block h-full w-full bg-green-500 text-white text-5xl text-center p-16">
                                            <img src={props.img[i]}
                                                 alt="test"
                                                 className=" mx-auto sizeImg"/>
                                        </div>
                                    </div>
                                    <label htmlFor={i !== 0 ? "carousel-" + i-- : "carousel-" + props.img.length}
                                           className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                                    <label htmlFor={i !== props.img.length ? "carousel-" + i++ : "carousel-" + 0}
                                           className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                                </div>
                            );
                        }
                        console.log(value);
                        return value;
                    }
                }

                <ol className="carousel-indicators">
                    {
                        () => {
                            let value = "aaaaaa";
                            for (let i in props.img) {
                                value += (i: number) => (
                                    <li className="inline-block mr-3">
                                        <label htmlFor={"carousel-" + i}
                                               className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                );
                            }
                            return value;
                        }
                    }
                </ol>
            </div>
        </div>
    );
}
export default Carousel;
