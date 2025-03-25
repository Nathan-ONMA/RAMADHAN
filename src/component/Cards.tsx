import * as React from "react";

import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  /*CardDescription,*/
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Pointer } from "@/components/magicui/pointer";
import { motion } from "motion/react";

export function CardWithForm() {
  const { theme } = useTheme();

  return (
    <MagicCard
      className="w-[650px] h-[615px] relative top-20"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <Card className="w-full h-full bg-transparent border border-white/20 text-white rounded-2xl shadow-lg p-6">
        <Pointer>
          <motion.div
            animate={{
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-600"
            >
              <motion.path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </Pointer>
        <CardHeader>
          <CardTitle className="title-happy text-5xl text-center">
            Happy Ramadan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className=" text-4xl ">
            En ce mois béni du Ramadan, je tiens à t’envoyer mes pensées les
            plus sincères. Que ce mois sacré t’apporte paix, sérénité et
            bénédictions infinies. Que tes prières soient exaucées, que ton cœur
            soit apaisé et que chaque jour t’illumine de sagesse et d’amour. Je
            suis reconnaissant(e) de t’avoir dans ma vie, et je prie pour que ce
            Ramadan t’apporte tout le bonheur que tu mérites. Qu’Allah te
            protège, te guide et remplisse ton cœur de lumière.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <span className="footer mt-5">By Nathan</span>
          <span>رمضان مبارك صديقي الغالي! 🤍✨</span>
        </CardFooter>
      </Card>
    </MagicCard>
  );
}
