import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Navbar from "./navbar";

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, ref) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ children, className, ...props }, ref) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={ref}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export default function Rules() {
  return (
	<div className="bg-[url(/lspd-bg-old.jpg)] bg-no-repeat bg-center bg-cover h-screen w-full">
      	<Navbar />
      	<div className="bg-slate-800 bg-opacity-50 pt-24 h-screen w-full text-white p-6 space-y-4 overflow-y-auto">
			<div className="max-w-4xl bg-black bg-opacity-50 rounded-lg px-4 py-2 m-auto">
				<Accordion.Root
				className="AccordionRoot"
				type="single"
				defaultValue="item-1"
				collapsible
				>
				<Accordion.Item className="AccordionItem" value="item-1">
					<AccordionTrigger>General Rules</AccordionTrigger>
					<AccordionContent>
					<ul className="list-disc list-inside space-y-2">
					<li>
						<strong>Respect the Management:</strong> Every player must respect the Management team (Staff/Helper/Moderators, etc.). Their role is to maintain peace and provide an enjoyable environment in the community.
					</li>
					<li>
						<strong>Community Safety Guidelines:</strong> Harassment, discrimination, or disrespect based on religion, nationality, gender identity (Male/Female/Non-Binary), or personal beliefs is strictly prohibited and may lead to removal from the community.
					</li>
					<li>
						<strong>Use of OOC Chat:</strong> OOC (Out of Character) chat is allowed only for technical assistance. Using it for taunts or roleplay-related communication is a rule violation.
					</li>
					<li>
						<strong>Leaking Personal Information:</strong> Sharing private information like IPs, addresses, phone numbers, or private conversations is not tolerated. Threats will also result in strict action.
					</li>
					<li>
						<strong>Microphone Requirement:</strong> All players must have a working microphone while playing on the server.
					</li>
					<li>
						<strong>Taunting and Toxicity:</strong> Toxic behavior or taunting in both IC (In Character) and OOC chat, including on Discord, is not allowed. This includes taunting over dead bodies or using inappropriate emotes.
					</li>
					<li>
						<strong>Friendly Hostages:</strong> Taking friendly hostages (e.g., members of your own gang or faction) is not allowed.
					</li>
					<li>
						<strong>Voice Misuse:</strong> Abusing your microphone, playing music, shouting, or using voice changers is prohibited and will result in warnings or bans.
					</li>
					<li>
						<strong>Language Requirement:</strong> Players must speak Urdu, Hindi, or English fluently for effective roleplay.
					</li>
					<li>
						<strong>Offensive Names:</strong> Gang or player names must not be offensive or associated with illegal or controversial groups (e.g., terrorist or religious organizations).
					</li>
					<li>
						<strong>Selling In-Game Assets:</strong> Selling or trading in-game assets for real money or outside payments is not allowed. In-game trading is allowed only within the game.
					</li>
					<li>
						<strong>Forcing Actions:</strong> You cannot force other players to give cash, assets, or use OOC chat/Twitter inappropriately.
					</li>
					<li>
						<strong>Global Announcements:</strong> Tweets and global announcements must be realistic and must not include offensive content.
					</li>
					<li>
						<strong>Safe Zone Abuse:</strong> Players may not enter a Safe Zone to escape after committing crimes or during an ongoing police chase.
					</li>
					<li>
						<strong>Requesting POV:</strong> If you suspect rule-breaking or hacking, request a POV (proof of video) from the other party in OOC chat. All players must record and keep at least 5 minutes of POV. Create a ticket instead of direct messaging staff.
					</li>
					</ul>
					</AccordionContent>
				</Accordion.Item>
				<Accordion.Item className="AccordionItem" value="item-2">
					<AccordionTrigger>Initiation</AccordionTrigger>
					<AccordionContent>
					<h3 className="text-center text-lg font-bold block my-2">Before taking action on a player you must have a  valid role-play reason behind it.</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>If you have intentions of killing someone you must make it clear, just pointing a gun and saying some kind words is not a threat to most. Try to add some emotions (after all its a role-play community).</li>
						<li>You can ONLY initiate by speaking through voice chat.</li>
						<li>You CAN NOT initiate from a helicopter.</li>
						<li>If a helicopter is hovering over you or following you for more than 90 seconds you may take it as initiation and shoot at the helicopter. However only the pilot and passengers of the Helicopter may shoot back. Other gang members of the helicopter who are on ground must initiate verbally.</li>
						<li>You CAN NOT initiate on Police by sending a police dispatch.</li>
						<li>If a player has been downed in a gun fight. He may not rejoin the fight after he is revived, He is obligated to leave the situation or continue role-play.</li>
						<li>If a player is not part of an established gang or white-listed faction the player must initiate for himself.</li>
						<li>Every gang has to initiate role-play for themselves, getting involved in a gun fight requires initiation.</li>
						<li>If you are not in a white-listed gang your friends must individually initiate role-play.</li>
						<li>If there is one person point gun at people not holding their guns in their hands (but available in pockets) has to comply and have to show fear RP unless you backup points back.</li>
					</ul>
					<h3 className="text-center text-lg font-bold block my-2">Initiation Procedure</h3>
					<p>To initiate, you must:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Have a weapon or Mele (knife/Axe or etc) drawn.</li>
						<li>Verbally tell the person your demands and what the consequences are if they do not comply. Some examples:
							<ul className="list-disc list-inside space-y-2">
								<li>"Get out of the vehicle with your hands up or be shot"</li>
								<li>"Put your hands up or be shot"</li>
								<li>"Hands up or be tased"</li>
							</ul>
						</li>
						<li>When a player is killed and then revived by a medic, said player must re-initiate before shooting.</li>
						<li>Using a helicopter to clearly block the path of another helicopter taking off is classed as one-way initiation.</li>
						<li>
							Players that are in the same gang as the pilot of the helicopter being blocked are allowed to open fire on the helicopter that is blocking the path and the gang members of the pilot.
						</li>
						<li>
							You are allowed to shoot at ground vehicles (this includes grounded helicopters) to disable it without initiating roleplay. However, after the vehicle is disabled the shooters must approach the vehicle to initiate roleplay with the occupants.
						</li>
						<li>
							Shooting at a vehicle allows the driver, the driver’s gang and the passengers of said vehicle to defend themselves. This does not include the passenger’s gang members.
						</li>
						<li>
							Knocking someone down is considered a one-way initiation, meaning you are allowed to kill the person who knocked you out.
						</li>
						<li>Police are allowed to kill the gunner of an armed vehicle without initiating.</li>
						<li>Each gang is individually responsible for initiating.</li>
						<li>
							Sling loading a vehicle is a one-way initiation, meaning the owner of the vehicle and his fellow gang members may shoot the player (attempting to) sling load the vehicle and said player’s gang.
						</li>
						<li>If the phrase “gang members” is used, this applies to Police as well.</li>
					</ul>

					</AccordionContent>
				</Accordion.Item>
				<Accordion.Item className="AccordionItem" value="item-3">
					<AccordionTrigger>Combat Logging</AccordionTrigger>
					<AccordionContent>
						<ul className="list-disc list-inside space-y-2">
							<li>Leaving a role-play situation by quitting the game willing or unwillingly.</li>
							<li>If a player closes his game or his game crashes.</li>
							<li>If player has been disconnected due to internet or power issues. He is responsible for contacting the concerned person and explain his situation.</li>
							<li>The player must also reconnect if possible and continue from where the role-play was discontinued.</li>
						</ul>
					</AccordionContent>
				</Accordion.Item>

				<Accordion.Item className="AccordionItem" value="item-4">
					<AccordionTrigger>Combat Sorting</AccordionTrigger>
					<AccordionContent>
					<ul className="list-disc list-inside space-y-2">
						<li>Combat storing is storing your  Vehicle / Cash  whilst you are in an active role-play situation or someone who clearly making an attempt to start one.</li>
						<li>Storing your Vehicle / Cash in a garage / ATM whilst you are being followed by someone is not allowed.</li>
						<li>Storing your Vehicle / Cash in a garage / ATM while someone has initiated role-play is not allowed, you will have to wait for at least 5 minutes to be sure that the situation is over.</li>
						<li>Driving your vehicle into water so that no one else can access it is a ban-able offense.</li>
					</ul>
					</AccordionContent>
				</Accordion.Item>
				</Accordion.Root>
			</div>
		</div>
	</div>
  );
}
