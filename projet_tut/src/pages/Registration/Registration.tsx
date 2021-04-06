import React, {useState} from "react";
import Input from "../../componant/Input/Input";

const Registration = (props: { setOnclickRegister: (arg0: boolean) => void; setOnclickConection: (arg0: boolean) => void; }) => {

    const [safeValue, setSafeValue] = useState({
        Email: "",
        Password: "",
        "Password Verification": ""
    });

    function isGoodInformation() {
        if (safeValue.Email!=="" && safeValue.Password!=="" && safeValue["Password Verification"] !=="") {
            console.log("test")
            const api = fetch("http://projettutore2back/register",
                {
                    method: 'post',
                    body: "email=" + safeValue.Email + "&password=" + safeValue.Password + "&confPass=" + safeValue["Password Verification"]
                })
                .then(reponse => {
                    if (reponse.status === 200) {
                        return reponse.json()
                    } else {
                        return reponse.status
                    }
                })
                .then(function (json) {
                    return json;
                });
            console.log("tatata")
            api.then(
                x => {
                    console.log("test")
                    if (typeof x === 'number') {
                        // probleme serveur
                    } else {
                        console.log(x);
                        props.setOnclickConection(true)
                        props.setOnclickRegister(false)
                    }
                }
            )
        }
    }

    return (
        <div className="relative bg-yellow-200">
            <div className="z-40 fixed inset-1/4 text-black bg-white rounded-2xl h-2/12">
                <div>
                    <p>Registration</p>
                </div>
                <div className="text-lg mx-10 h-8/12">
                    <Input setTable={setSafeValue} table={safeValue} name={"Email"} type={"text"} select={null}
                           contentTable={false}/>
                    <Input setTable={setSafeValue} table={safeValue} name={"Password"} type={"text"} select={null}
                           contentTable={false}/>
                    <Input setTable={setSafeValue} table={safeValue} name={"Password Verification"} type={"text"}
                           select={null} contentTable={false}/>
                </div>
                <div className="flex space-x-4 my-8 mx-10 h-2/12">
                    <button
                        onClick={() => isGoodInformation()}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Validate
                    </button>
                    <button
                        onClick={() => {
                            props.setOnclickRegister(false);
                            props.setOnclickConection(true);
                        }}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                    </button>
                </div>

            </div>
            <img className="z-30 opacity-30 absolute inset-0 object-cover h-screen w-screen
            " src="/Register.jpg" alt="img video"/>

        </div>
    );
}
export default Registration