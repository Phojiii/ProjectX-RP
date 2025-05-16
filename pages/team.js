import Navbar from "./navbar";
import { RiTeamFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Teams() {

  return (
    <div className="">
        <Navbar />
        <div className="bg-[url(/ourteam-main-bg.jpg)] bg-no-repeat bg-center bg-cover w-full h-screen fixed overflow-auto">
            <div className="bg-black bg-opacity-50">
                <div className="w-4/5 block m-auto py-40">
                    {/* Owner */}
                    <h2 className="flex text-white leading-none text-2xl my-5"><CgProfile />&nbsp;&nbsp;Owner</h2>
                    <div className="flex justify-between items-center gap-10">
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/raja.gif" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">RAJA</h2>
                            <a href="https://discord.com/users/737090362086260837" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                    </div>
                    {/* Founder */}
                    <h2 className="flex text-white leading-none text-2xl my-5"><CgProfile />&nbsp;&nbsp;Founder</h2>
                    <div className="flex justify-between items-center gap-10">
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/tits.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">Maxtitan</h2>
                            <a href="https://discord.com/users/1111457434356170873" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                    </div>
                    {/* Five M Development Team */}
                    <h2 className="flex text-white leading-none text-2xl my-5"><CgProfile />&nbsp;&nbsp;FiveM Development Team</h2>
                    <div className="flex justify-normal gap-10">
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/team-icon.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">Osman</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Development Lead</p>
                            <a href="https://discord.com/users/1237524283081756746" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/jaggajatt.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">jaggabhai 2.0</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Developer</p>
                            <a href="https://discord.com/users/375301452568199171" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">𝔥么ɱ☡么</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Junior Developer</p>
                            <a href="https://discord.com/users/878030557169221693" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">JeaSon</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Junior Developer</p>
                            <a href="https://discord.com/users/311151875682598943" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                    </div>
                    {/* Administrators */}
                    <h2 className="flex text-white leading-none text-2xl my-5"><CgProfile />&nbsp;&nbsp;Project X Administrators</h2>
                    <div className="flex justify-normal gap-10">
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/team-icon.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">choKez</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Lead Admin</p>
                            <a href="https://discord.com/users/463616297973055488" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/jaggajatt.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">Sukuna</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Lead Admin</p>
                            <a href="https://discord.com/users/1299712746618884139" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">afrrz</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/682158080611713050" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">aryan</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/499666749709484043" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">𝑰𝑩𝑹𝑰𝑰</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/698395352276926474" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                    </div>
                    <div className="flex justify-normal gap-10 mt-10 w-full">
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">MALANG</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/842852553456091179" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">SaifNeon</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/906232627764293652" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">𝕊𝕙𝕒𝕙𝕣𝕠𝕫</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/763104891823718432" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                        <div className="text-center border rounded-lg border-gray-600 bg-black bg-opacity-50 text-white py-6 px-6 w-1/5">
                            <img src="/team/hamza.png" alt="" className="block m-auto w-1/4 rounded-lg" />
                            <h2 className="text-xl">max titan.</h2>
                            <p className="text-gray-400 leading-none mt-6 text-sm">Administrators</p>
                            <a href="https://discord.com/users/1111457434356170873" className="block m-auto bg-black text-center rounded-md py-3 mt-5 font-bold hover:bg-white hover:text-black transition-all duration-500">Discord Profile</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  );
}
