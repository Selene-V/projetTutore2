import React, {useState} from "react";
import "./Carousel.css"

const Carousel = (props: { img: any; }) => {

    props.img.map((value: string, index: string) => {
        document.head.insertAdjacentHTML("beforeend", `<style>#carousel-` + index + `:checked ~ .control-` + index + `{
    display: block;
}</style>`)
    })
    const [curentPoint, setCurentPoint] = useState(0);
console.log(props.img.length);
    return (
        <div className="carousel relative">
            <div className="carousel-inner relative overflow-hidden">
                {
                    props.img.map((value: any, index: number) => (
                            <div key={index}>
                                <input className="carousel-open" type="radio" id={"carousel-" + index} name={"carousel"}
                                       defaultChecked={index === 0}
                                       hidden={true}/>
                                <div
                                    className="carousel-item absolute opacity-0 lg:carousel_size xl:carousel_size flex items-start">
                                    <div
                                        className="block h-full w-full text-white text-5xl text-center rounded-xl xl:bg-green-500 lg:bg-green-500 p-16">
                                        <img src={value.path_thumbnail}
                                             alt="test"
                                             className=" mx-auto lg:rounded-2xl xl:rounded-2xl lg:sizeImg xl:sizeImg"/>
                                    </div>
                                </div>

                                <label
                                    onClick={() => {
                                        index === 0 ? setCurentPoint(props.img.length - 1) : setCurentPoint(index - 1)
                                    }}
                                    htmlFor={index !== 0 ? "carousel-" + (index - 1) : "carousel-" + (props.img.length - 1)}
                                    className={"prev control-" + index + " w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"}>‹</label>
                                <label
                                    onClick={() => index === props.img.length - 1 ? setCurentPoint(0) : setCurentPoint(index + 1)}
                                    htmlFor={index !== (props.img.length - 1) ? "carousel-" + (index + 1) : "carousel-" + 0}
                                    className={"next control-" + index + " w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"}>›</label>
                            </div>
                        )
                    )
                }

                <div className={props.img.length < 3 ?
                    "hidden carousel-indicators lg:flex xl:flex h-16 justify-between"
                    :
                    "hidden carousel-indicators lg:flex xl:flex h-16 overflow-y-auto justify-between"
                }>
                    {props.img.map((value: any, index: number) => (
                        <div className="inline-block mr-2" key={index}>
                            {index !== curentPoint ?
                                <label htmlFor={"carousel-" + index}
                                       onClick={() => setCurentPoint(index)}
                                       className="carousel-bullet cursor-pointer block text-6xl text-white hover:text-gray-500">•</label>
                                :
                                <label htmlFor={"carousel-" + index}
                                       onClick={() => setCurentPoint(index)}
                                       className="carousel-bullet cursor-pointer block text-6xl text-gray-800">•</label>}
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Carousel;
