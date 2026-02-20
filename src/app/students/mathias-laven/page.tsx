"use client";

import Image from "@/components/image";

export default function Page() {
  return (
    <div>
      <div>
        <div className="flex space-x-5">
          <div>
            <div className="flex-col">
              <div className="size-25 grow"/>
              <div className="flex-none">
                <div className="outline-5">
                  <Image
                    src="/images/mathias/headshot.jpg"
                    width={800}
                    height={800}
                    alt="Myself"
                  />
                </div>
                <p className="mt-2 text-center italic text-gray-300">Myself</p>
              </div>
              <div className="size-25 grow"/>
            </div>
          </div>
          <div>
            <h1 className="text-center text-[60px]">
              <b>Mathias Laven</b>
            </h1>
            <div className="flex">
              <div id="about" className="w-200 px-8 pt-30 text-[25px]">
                <p className="text-center font-bold">About</p>
                <p className="text-center">
                  My programming interest started in elementary school. 
                  <br></br>I joined UNWSP as a Computer Science major in 2023.
                  <br></br>I became a member of CSC in Fall 2025.
                </p>
                <div className="pt-6 flex mb-10">
                  <div className="flex-10"></div>
                  <div className="w-25 flex-shrink-0">
                    <a href="https://github.com/MathiasLaven/">
                      <Image
                        src="/images/josiah/github-mark-white.png"
                        width={100}
                        height={100}
                        alt="My Github"
                        title="My GitHub"
                        className="rounded-full"
                      />
                    </a>
                  </div>
                  <div className="flex-1"></div>
                  <div className="w-25 flex-shrink-0">
                    <a href="https://discordapp.com/users/1413345131473539145">
                      <Image
                        src="/images/mathias/discord-logo.jpg"
                        width={100}
                        height={100}
                        alt="My Discord"
                        title="My Discord"
                        className="rounded-full"
                      />
                    </a>
                  </div>
                  <div className="flex-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
