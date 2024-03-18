import { useState } from "react";

const Register = () => {
    //তিনটা ইনপুট ফ্লিড এর জন্য তিনটা useState
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //মডাল ওপেন করার useState 
    const [isSubmit, setSubmit] = useState(false);

    // chackbox এর জন্য useState
    const [isChack, setChack] = useState(false)

    // useState গুলো কে সাবমিট ফাংশনে অব্জেক্ট হিসাবে তৈরি করছি
    const handelSubmit = (event) => {
        if(!isChack){
            return;
        }
        event.preventDefault()
        const inputData = {
            name: name, 
            email: email, 
            password: password
        }
        console.log(inputData);
        setSubmit(true);
    }

    return (
        <div>
            <div className="p-10 w-[500px] mx-auto bg-slate-100 my-10 rounded">
                <form onSubmit={(event)=>handelSubmit(event)} action="">
                <label className="mb-2  flex font-bold" htmlFor="">Name</label>
                <input
                //useState set ফাংশন তিনটি ইনপুট ফ্লিডে পাঠিয়ে দিছে  
                onChange={(event) => setName(event.target.value)}
                className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3" type="text" name="" id="" placeholder="Enter Your Name" required />

                <label className="mb-2  flex font-bold" htmlFor="">Email</label>
                <input 
                onChange={(event) => setEmail(event.target.value)}
                className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3" type="email" name="" id="" placeholder="Enter Your Email" required />

                <label className="mb-2 flex font-bold" htmlFor="">Password</label>
                <input
                onChange={(event) => setPassword(event.target.value)} 
                className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3" type="password" name="" id="" placeholder="Enter Your Password" required />

              <div className="flex items-center justify-between">
                <div>
                <input type="checkbox" onChange={(event)=> setChack(event.target.checked)} /> Remember me
                </div>
                <div className="flex justify-end mt-3">
                    <button className="bg-yellow-200 w-[100px] p-4 rounded font-bold" type="submit">Sing Up</button>
                </div>
              </div>
                </form>
            </div>

            {/* এখানে একটা মডাল নেয়া হয়ছে */}

            {
                isSubmit && <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-full">
                <div className="w-[500px] h-[500px] bg-slate-100 rounded">
                        <h1 className="flex justify-center items-center h-[100px]">Your Submit Done ✔️</h1>
                       <p><span className="text-lg font-bold">Name:</span> {name}</p>
                        <p><span className="text-lg font-bold">Email:</span> {email}</p>
                </div>
            </div>
            }
        </div>
    );
};

export default Register;