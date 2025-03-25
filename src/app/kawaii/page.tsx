"use client";

import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import gsap from "gsap";
/*import LoadingScreen from "@/component/LoadingScreen";*/
import { CardWithForm } from "@/component/Cards";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const router = useRouter();

  useEffect(() => {
    console.log("Script chargé !");
    setColor(resolvedTheme === "dark" ? "#000000" : "#ffffff");

    const counter3 = document.querySelector(".counter-3") as HTMLElement | null;
    const counter2 = document.querySelector(".counter-2") as HTMLElement | null;
    const counter1 = document.querySelector(".counter-1") as HTMLElement | null;
    // Date cible : Mar 25, 2025 16:24:59
    const targetTime = new Date("Mar 25, 2025 23:10:00").getTime();
    const now = new Date().getTime();
    if (now < targetTime) {
      // Si l'heure actuelle est avant la date cible, rediriger vers la page d'accueil
      router.push("/");
    }
    if (counter3) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = j.toString();
          counter3.appendChild(div);
        }
      }
      const finalDiv = document.createElement("div");
      finalDiv.className = "num";
      finalDiv.textContent = "0";
      counter3.appendChild(finalDiv);
    }

    function animate(counter: HTMLElement | null, duration: number, delay = 0) {
      if (!counter) return;
      const numHeight = counter.querySelector(".num")?.clientHeight || 0;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }

    animate(counter3, 5);
    animate(counter2, 6);
    animate(counter1, 2, 4);

    gsap.to(".digit", {
      top: "-150px",
      stagger: { amount: 0.25 },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".loader-1", { width: 0, duration: 6, ease: "power2.inOut" });
    gsap.from(".loader-2", {
      width: 0,
      delay: 1.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", { background: "none", delay: 6, duration: 0.1 });

    const tl = gsap.timeline();
    tl.to(".loader-1", { rotate: 90, y: -50, duration: 0.5, delay: 6 }).to(
      ".loader-2",
      { x: -75, y: 75, duration: 0.5 },
      "<"
    );

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });

    gsap.to("h1", {
      duration: 1.5,
      delay: 7,
      y: -80,
      ease: "power4.inOut",
      stagger: { amount: 0.1 },
    });
  }, [resolvedTheme,router]);

  return (
    <div className="w-screen h-screen bg-black">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="website-content absolute w-full top-0 left-0 flex flex-col justify-center items-center">
        <div className="header relative w-max h-max">
          <div className="h1 flex text-white">
            <h1 className="text-[80px] text-center relative top-[90px] m-0 mx-[10px] uppercase font-medium">
              <SparklesText text="Website" />
            </h1>
            <h1 className="text-[80px] text-center relative top-[90px] m-0 mx-[10px] uppercase font-medium">
              <SparklesText text="To Sakina" />
            </h1>
          </div>
          <div className="header-revealer absolute top-0 w-full h-full after:content-[''] after:absolute after:left-0 after:w-full after:h-full after:bg-black after:top-[90px]"></div>
        </div>
        <CardWithForm/>
      </div>
      <div className="loading-screen fixed top-0 left-0 w-full h-full bg-white text-black pointer-events-none">
      <div className="loader absolute top-[50%] left-[50%] w-75 h-12.5 flex bg-[rgb(80,80,80)]">
        <div className="loader-1 bar relative dark:bg-black w-[200px] h-12.5"></div>
        <div className="loader-2 bar dark:bg-black w-[100px] h-12.5"></div>
      </div>

      <div className="counter fixed left-12.5 bottom-12.5 flex h-25 leading-45 text-[100px] font-medium">
        <div className="counter-1 digit relative top-[-15px]">
          <div className="num">0</div>
          <div className="num num1offset1 relative right-[-25px]">1</div>
        </div>

        <div className="counter-2 digit relative top-[-15px]">
          <div className="num">0</div>
          <div className="num num1offset2 relative right-[-10px]">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>

        <div className="counter-3 digit relative top-[-15px]">
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
      </div>
    </div>
    </div>
  );
}
