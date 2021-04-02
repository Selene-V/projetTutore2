import React from "react";

const ReviewBan = (props: { reviewBan: { name: string; description: string; }[]; }) => {
    return (

        <div className=" mx-48 mb-10 mt-8 bg-white rounded-xl text-lg">
            <div className="bg-green-500 rounded-t-xl">
                <p className="ml-2">Review Ban</p>
            </div>
            <div className="mx-10 py-2 space-y-2 text-black text-left">
                {props.reviewBan.map((reviewBan: { name: React.ReactNode; description: React.ReactNode; }, index) =>
                    <div key={index}
                         className="bg-green-200 rounded-xl">
                        <div className="bg-green-100 rounded-t-xl">
                            <p className="ml-2 mt-2">{reviewBan.name}</p>
                        </div>
                        <p className="mx-5 my-1 text-base">{reviewBan.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default ReviewBan;
