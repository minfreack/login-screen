import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import {FormEvent, useState} from "react";

const user = {
        email: "luis@email.com",
        password: "123456"
}
const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formValues.email === user.email && formValues.password === user.password){
            return alert("Logged in")
        }
        return alert("Invalid credentials")
    }
    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center relative">
                <div className="absolute bg-mint left-0 w-[30vw] h-screen"/>
                <div className="absolute bg-white right-0 w-[70vw] h-screen"/>
                <div className="w-full mx-20 shadow-2xl z-20 grid grid-cols-[30%_70%]">
                    <div className="flex mx-8 flex-col gap-y-4 items-center justify-center">
                        <img src={logo} alt="logo" />
                        <p className="text-lg w-2/3 text-center">India's first waterless car cleaning company</p>
                    </div>
                    <div className="bg-white w-full flex flex-col h-[60vh] items-center justify-center px-20 relative">
                        <Link to="https://www.lipsum.com/feed/html" target="_blank" className="text-sm absolute right-6 top-4"><p>Needs help?</p></Link>
                        <h2 className="text-xl font-semibold">Log In</h2>
                        <form onSubmit={onSubmit} className="pt-14">
                            <label className="">Email</label>
                            <input name="email" onChange={onChange} required type="text" placeholder="joe@email.com" className="w-full border-[1px] border-gray-200 px-4 py-4 rounded-lg mt-2 mb-4" />
                            <label className="">Password</label>
                            <input name="password" onChange={onChange} required type="password" placeholder="Enter your password" className="w-full border-[1px] border-gray-200 px-4 py-4 rounded-lg mt-2 mb-2" />
                            <Link to="../forgot-password"><p className="text-end text-smr">forgot password?</p></Link>
                            <button className="bg-mint mt-14 text-black w-full py-4 rounded-md">Login</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Login