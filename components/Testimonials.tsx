"use client";

import Image from "next/image";
import Avatar1 from "@/public/assests/avatar-1.png";
import Avatar2 from "@/public/assests/avatar-2.png";
import Avatar3 from "@/public/assests/avatar-3.png";
import Avatar4 from "@/public/assests/avatar-4.png";
import Avatar5 from "@/public/assests/avatar-5.png";
import Avatar6 from "@/public/assests/avatar-6.png";
import Avatar7 from "@/public/assests/avatar-7.png";
import Avatar8 from "@/public/assests/avatar-8.png";
import Avatar9 from "@/public/assests/avatar-9.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div id="testimonials" className="pt-12">
      <div className="flex flex-col items-center px-28 pb-16">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl font-semibold border-slate-300/80">
          Testimonials
        </div>
        <div className="text-4xl lg:text-5xl pt-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          What our users say
        </div>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] h-[750px] mb-12 md:mb-28 lg:mb-36">
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <div className="flex items-center justify-center overflow-x-hidden pb-4 gap-4 ">
            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The voice agent felt like a real hiring manager. It helped me handle
                  tough behavioral questions without freezing up in my actual interview.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar1} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Alex Rivera</div>
                    <div>@jamietechguru00</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  I’ve tried LeetCode and mock sites, but PrepBettr actually
                  told me why my solution worked or didn’t. Huge confidence boost.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar6} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Josh Smith</div>
                    <div>@jjsmith</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  As someone switching from sales to marketing,
                  PrepBettr helped me articulate my past experience for the new role. Super helpful.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar3} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Morgan Lee</div>
                    <div>@morganleewhiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The system design sandbox made me feel prepared for the onsite round.
                  The feedback was better than what I got from peers.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar7} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Jordan</div>
                    <div>@caseyj</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  I love that it tailored everything to my specific role and tech stack.
                  No wasted time, just focused prep.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar2} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Taylor Kim</div>
                    <div>@taylorkimm</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  PrepBettr helped me overcome my fear of speaking during interviews.
                  The voice feedback was a game changer.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar5} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Riley Smith</div>
                    <div>@rileysmith1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Daily practice reminders kept me consistent.
                  I prepped a little each day and landed my first job out of college.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar4} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Jordan Patels</div>
                    <div>@jpatelsdesign</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Resume feedback, mock interviews, coding problems — it’s like having a full prep team in one app.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar8} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Sam Dawson</div>
                    <div>@dawsontechtips</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  It didn’t just give me questions, it gave me coaching. That made all the difference.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar9} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Harper</div>
                    <div>@casey09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center overflow-x-hidden gap-4 ">
            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  PrepBettr helped me practice not just answers, but how to deliver them.
                  I finally stopped rambling in interviews.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar1} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Alex Rivera</div>
                    <div>@jamietechguru00</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  The real-time feedback after coding tests saved me hours of second-guessing.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar6} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Josh Smith</div>
                    <div>@jjsmith</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  As a bootcamp grad, I wasn’t sure where to start.
                  PrepBettr gave me structure, confidence, and the right challenges.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar3} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Morgan Lee</div>
                    <div>@morganleewhiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Having mock interviews I could do anytime, without scheduling stress,
                  made prep so much more flexible.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar7} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Jordan</div>
                    <div>@caseyj</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  I was laid off and overwhelmed. PrepBettr gave me a roadmap and helped me feel in control again.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar2} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Taylor Kim</div>
                    <div>@taylorkimm</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Interviewing in my second language was tough, but PrepBettr’s
                  voice feedback helped me improve fluency and pacing.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar5} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Riley Smith</div>
                    <div>@rileysmith1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  This platform is gold for product roles. It covered strategy,
                  design, and communication in one place.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar4} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Jordan Patels</div>
                    <div>@jpatelsdesign</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Flashcards, quizzes, and mock questions kept me engaged without burnout.
                  Best interview prep I’ve tried.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar8} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Sam Dawson</div>
                    <div>@dawsontechtips</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Being able to simulate real interviews with voice and video helped me break
                  through my interview anxiety.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar9} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Harper</div>
                    <div>@casey09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
