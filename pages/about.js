import Navbar from "./navbar";

export default function About () {
    return (
        <div>
            <Navbar />
            <div className="bg-[url(/about-bg.png)] bg-no-repeat bg-center bg-cover w-full h-screen fixed overflow-auto">
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-screen-xl block m-auto text-white pt-32">
                        <h1 className="text-4xl font-bold pb-10 text-center">About Project X</h1>
                        <p>Project X is a FiveM roleplay server that was founded in 2018, driven by a vision to create a unique and immersive GTA V RP experience unlike any other. What started as a small group of passionate players and developers has grown into a dynamic and ever-evolving community where creativity, realism, and connection are at the core of everything we do.</p>
                        <h2 className="text-2xl font-bold pt-10 pb-3">Our Mission</h2>
                        <p>From the beginning, our mission has been simple:</p>
                        <p>To provide a high-quality, realistic, and community-driven roleplay environment where every player has the freedom to build their story, shape the world around them, and make a lasting impact.</p>
                        <h2 className="text-2xl font-bold pt-10 pb-3">Our Journey</h2>
                        <p>Since 2018, Project X has continuously evolved. We've pushed past the limits of default FiveM gameplay by introducing custom scripts, systems, and features designed to deepen the RP experience. Over the years, we've listened to feedback, adapted to changes in the RP scene, and stayed committed to creating a server that balances structure with freedom.</p>
                        <h2 className="text-xl font-bold pt-10 pb-3">What Makes Us Different?</h2>
                        <p><strong>💼 Custom Jobs & Careers:</strong> From legal pathways like police, EMS, real estate, and government roles, to underground lives as gang members, drug traffickers, or hackers—every job is built to support in-depth, meaningful RP.</p>
                        <p><strong>🚓 Realistic Law Enforcement Systems:</strong> Our police, court, and justice systems are designed to be fair, immersive, and dynamic, with everything from traffic stops to full-scale investigations.</p>
                        <p><strong>🏙️ Player-Driven Economy:</strong> Businesses, black market deals, property ownership, and supply chains are in the hands of the players. Build an empire—or take one down.</p>
                        <p><strong>🔧 Active Development:</strong> We’re constantly working behind the scenes, improving performance, introducing new features, fixing bugs, and responding to community needs.</p>
                        <p><strong></strong>🤝 Strong Community Values: We’re proud of the culture we’ve built—respect, creativity, and collaboration. Toxicity has no place here. Whether you’re a roleplay veteran or a newcomer, you’re welcome in Project X.</p>
                        <h2 className="text-2xl font-bold pt-10 pb-3">Our Community</h2>
                        <p>Project X isn’t just a server—it’s a community of storytellers, gamers, and creators. We host events, story arcs, community meetings, and regular updates based on feedback. Our admins are active and approachable, and our Discord is the hub of all things Project X—where friendships are made, plans are plotted, and ideas are brought to life.</p>
                        <h2 className="text-2xl font-bold pt-10 pb-3">Join Us</h2>
                        <p>Whether you’re looking to become a respected officer, a powerful criminal, a local business owner, or just live your best virtual life, Project X is the place to make it happen. We’ve been here since 2018, and we’re just getting started.</p>
                        <p className="text-center text-3xl font-bold pt-20 pb-32">Welcome to Project X—where your story begins.</p>
                    </div>
                </div>
            </div>
        </div>
    );
            
}
