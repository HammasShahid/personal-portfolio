"use client";

import AnimatedCounter from "./AnimatedCounter";

interface AchievementProps {
  amount: number;
  title: string;
  icon: React.ReactNode;
}

export default function Achievement({ amount, title, icon }: AchievementProps) {
  return (
    <div className="flex items-end gap-2">
      <span className="text-4xl text-gray-300 lg:text-2xl sm:text-xl">
        {icon}
      </span>
      <div className="flex flex-col gap-y-2">
        <AnimatedCounter amount={amount} once={false} />
        <span className="text-sm tracking-wide text-gray-500 sm:text-xs">
          {title}
        </span>
      </div>
    </div>
  );
}
