import { useSession } from "next-auth/react";
import { useState } from "react";
import Navbar from "./navbar";

export default function EMSForm() {
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [discordTag, setDiscordTag] = useState("");
  const [hex, setHex] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState("");
  const [prevExperience, setPrevExperience] = useState("");
  const [whyDoctor, setWhyDoctor] = useState("");
  const [sopConfirm, setSopConfirm] = useState("");
  const [rulesConfirm, setRulesConfirm] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "EMS",
        userDiscordId: session.user.id,
        discordUsername: session.user.name,
        answers: {
          email,
          name,
          age,
          characterName,
          discordTag,
          hex,
          country,
          timezone,
          prevExperience,
          whyDoctor,
          sopConfirm,
          rulesConfirm,
          experience,
        },
      }),
    });

    if (res.ok) {
      alert("Application Submitted!");
    } else {
      alert("There was an error submitting your application.");
    }
  };

  if (!session) return <p>Please login with Discord first.</p>;

  return (
    <div className="bg-[url(/ems-bg.png)] bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="bg-slate-800 bg-opacity-75 pt-24">
        <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto text-white">
          <h1 className="font-bold mb-4 text-white text-4xl text-center">EMS Application</h1>
          
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Here" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name Here" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Your Age Here" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Character Name</label>
            <input type="text" value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder="Character Name" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Discord ID (Example: ABCD#0000)</label>
            <input type="text" value={discordTag} onChange={(e) => setDiscordTag(e.target.value)} placeholder="Discord Tag" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Steam HEX</label>
            <input type="text" value={hex} onChange={(e) => setHex(e.target.value)} placeholder="Steam HEX" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Which Country you are from?</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Your Country" className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Select Your Timezone</label>
            <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black">
              <option value="">Select timezone</option>
              <option value="GMT+4">GMT+4 (UAE)</option>
              <option value="GMT+5">GMT+5 (Pakistan)</option>
              <option value="GMT+1">GMT+1 (UK)</option>
              <option value="GMT-5">GMT-5 (USA EST)</option>
            </select>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Previous EMS Experience (This or any other server)</label>
            <input type="text" value={prevExperience} onChange={(e) => setPrevExperience(e.target.value)} className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"/>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Why do you want to become a doctor? What can you bring to the department? (Min. 100 words)</label>
            <textarea value={whyDoctor} onChange={(e) => setWhyDoctor(e.target.value)} className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black" rows={3}></textarea>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">General EMS Experience</label>
            <textarea value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black" rows={3}></textarea>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">I confirm that I've read and understood the SOP</label>
            <div className="mb-2">
              <label><input type="radio" name="sop" value="Yes" onChange={() => setSopConfirm("Yes")} /> Yes</label>
              <label className="ml-4"><input type="radio" name="sop" value="No" onChange={() => setSopConfirm("No")} /> No</label>
            </div>
          </div>
          
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">I confirm that I've read and understood the Server Rules</label>
            <div className="mb-4">
              <label><input type="radio" name="rules" value="Yes" onChange={() => setRulesConfirm("Yes")} /> Yes</label>
              <label className="ml-4"><input type="radio" name="rules" value="No" onChange={() => setRulesConfirm("No")} /> No</label>
            </div>
          </div>

          <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}
