"use client";

type Props = {
  children: React.ReactNode;
  iconHex: string;
  title: string;
};

export default function StackElement({ children, iconHex, title }: Props) {
  return (
    <div className="flex flex-col items-center justify-center border-[1px] rounded-[5px] border-[#202020] w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] bg-black">
      <span style={{ color: iconHex, fontSize: "3.5rem" }}>{children}</span>
      <span className="text-[#01FFB9] text-[0.7rem] md:text-[0.8rem]">
        {title}
      </span>
    </div>
  );
}
