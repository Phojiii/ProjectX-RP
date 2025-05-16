
import Navbar from "./navbar";

export default function Unauthorized () {
    return (
        <div>
            <Navbar />
            <div className="bg-[url(/accessdenied.jpg)] bg-no-repeat bg-center bg-cover w-full h-screen fixed overflow-auto">
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-screen-xl block m-auto text-white pt-32">
                        
                    </div>
                </div>
            </div>
        </div>
    );
            
}
