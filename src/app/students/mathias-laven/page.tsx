"use client";

import Image from "@/components/image";

export default function Page() {
  return (
    <div>
      <h1 className="m-10 text-center text-[60px]">
        <b>Mathias Laven</b>
      </h1>
      <p className="text-center text-[30px]">
        Computer Science student and CSC member!
      </p>
      <div className="flex space-x-10">
        <div id="about" className="w-1000 px-8 pt-30 text-[25px]">
          <p className="text-center font-bold">About</p>
          <p className="text-center">
            My programming interest started in elementary school, and 
            <br></br>I joined UNWSP as a Computer Science major in 2023.
            <br></br>I became a member of CSC in Fall 2025.
          </p>
          <div className="pt-6">
              <Image
                src="/images/josiah/github-mark-white.png"
                width={100}
                height={100}
                alt="Github"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
