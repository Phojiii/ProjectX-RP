import { useSession } from "next-auth/react";
import { useState } from "react";
import Navbar from "./navbar";

export default function LSPDForm() {
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [discordId, setDiscordId] = useState("");
  const [hex, setHex] = useState("");
  const [age, setAge] = useState("");
  const [timezone, setTimezone] = useState("");
  const [hoursPlayed, setHoursPlayed] = useState("");
  const [prevExperience, setPrevExperience] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [whyOfficer, setWhyOfficer] = useState("");
  const [backstory, setBackstory] = useState("");
  const [sopConfirm, setSopConfirm] = useState("");
  const [rulesConfirm, setRulesConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "LSPD",
        userDiscordId: session.user.id,
        discordUsername: session.user.name,
        answers: {
          email,
          characterName,
          discordId,
          hex,
          age,
          timezone,
          hoursPlayed,
          prevExperience,
          aboutYou,
          whyOfficer,
          backstory,
          sopConfirm,
          rulesConfirm,
        },
      }),
    });

    if (res.ok) {
      alert("Application Submitted!");
    } else {
      alert("Submission failed!");
    }
  };

  if (!session) return <p>Please login with Discord first.</p>;

  return (
    <div className="bg-[url(/lspd-bg.jpg)] bg-no-repeat bg-center bg-cover h-screen w-full">
      <Navbar />
      <div className="bg-slate-800 bg-opacity-50 pt-24 h-screen w-full">
        <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto text-white">
          <h1 className="font-bold mb-4 text-white text-4xl text-center">LSPD Application</h1>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your E-Mail"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Character Name:</label>
            <input
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="Enter Your Character Name"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Discord ID:</label>
            <input
              type="text"
              value={discordId}
              onChange={(e) => setDiscordId(e.target.value)}
              placeholder="Enter Your Discord ID"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Stream HEX:</label>
            <input
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="Enter Your Stream HEX"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Enter Your Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Your Age"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Select Your TimeZone:</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            >
              <option value="">Select Your TimeZone</option>
              <option value="GMT+4">GMT+4 (UAE)</option>
              <option value="GMT+5">GMT+5 (Pakistan)</option>
              <option value="GMT+1">GMT+1 (UK)</option>
              <option value="GMT-5">GMT-5 (USA EST)</option>
            </select>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">How many hours you have on Project X RP?</label>
            <input
              type="text"
              value={hoursPlayed}
              onChange={(e) => setHoursPlayed(e.target.value)}
              placeholder="Hours on Project X RP"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Previous Experience in the LSPD?</label>
            <textarea
              value={prevExperience}
              onChange={(e) => setPrevExperience(e.target.value)}
              placeholder="Previous Experience in the LSPD (This or any other Server)"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Brief description about yourself (Min 50 words)</label>
            <textarea
              value={aboutYou}
              onChange={(e) => setAboutYou(e.target.value)}
              placeholder="Brief description about yourself (50 Words)"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Why do you want to become an officer? (Min 100 words)</label>
            <textarea
              value={whyOfficer}
              onChange={(e) => setWhyOfficer(e.target.value)}
              placeholder="Reason to Join LSPD (100 Words)"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">Character Backstory (Min 150 Words)</label>
            <textarea
              value={backstory}
              onChange={(e) => setBackstory(e.target.value)}
              placeholder="Character Backstory (150 Words)"
              className="w-full border rounded px-2 py-1 mb-2 bg-opacity-50 bg-black"
            />
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">I confirm that I've read and understood the SOP.</label>
            <div className="mb-2">
              <label><input type="radio" name="sop" value="Yes" onChange={() => setSopConfirm("Yes")} /> Yes</label>
              <label className="ml-4"><input type="radio" name="sop" value="No" onChange={() => setSopConfirm("No")} /> No</label>
            </div>
          </div>
          <div className="lg:flex sm:block">
            <label className="w-[400px] py-1">I confirm that I've read and understood the Server Rules.</label>
            <div className="mb-4">
              <label><input type="radio" name="rules" value="Yes" onChange={() => setRulesConfirm("Yes")} /> Yes</label>
              <label className="ml-4"><input type="radio" name="rules" value="No" onChange={() => setRulesConfirm("No")} /> No</label>
            </div>
          </div>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}
