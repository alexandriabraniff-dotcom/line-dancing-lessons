import { Sparkle, Heart, SmallStar } from "@/components/Decorations";

export default function ComingSoon() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-16"
      style={{ background: "linear-gradient(160deg, #FEEFB8 0%, #FFE3E2 100%)" }}
    >
      {/* Decorations */}
      <Sparkle size={36} color="#FE9EED" className="absolute top-10 left-[7%] opacity-55 rotate-12" />
      <Sparkle size={20} color="#D49C84" className="absolute top-24 left-[20%] opacity-40" />
      <Heart size={30} color="#F2B8CE" className="absolute top-14 right-[12%] opacity-50" />
      <SmallStar size={22} color="#FE9EED" className="absolute top-40 right-[6%] opacity-60" />
      <Sparkle size={26} color="#F2B8CE" className="absolute bottom-24 left-[5%] opacity-45" />
      <SmallStar size={16} color="#D49C84" className="absolute bottom-36 right-[18%] opacity-50" />
      <Heart size={22} color="#FE9EED" className="absolute bottom-16 right-[4%] opacity-35" />

      <div className="max-w-xl w-full mx-auto text-center relative z-10">
        {/* Script top */}
        <p className="script text-[#FE9EED] text-3xl mb-3">Welcome to</p>

        {/* Brand name */}
        <h1 className="rye text-5xl md:text-7xl text-[#6B4841] leading-tight tracking-wide uppercase mb-1">
          Wildflower
        </h1>
        <p className="rye text-2xl md:text-4xl text-[#D49C84] tracking-widest uppercase mb-10">
          Line Dancing
        </p>

        {/* Sparkle divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20 bg-[#F2B8CE]" />
          <Sparkle size={16} color="#FE9EED" />
          <div className="h-px w-20 bg-[#F2B8CE]" />
        </div>

        {/* Message */}
        <div className="bg-[#FEEFB8]/75 border border-[#F2B8CE] rounded-3xl px-8 py-10">
          <p className="text-[#6B4841] text-lg leading-relaxed mb-4">
            Thank you so much for visiting our site!
          </p>
          <p className="text-[#6B4841] text-base leading-relaxed mb-8">
            We are currently going through a rebranding and will be up and running again very soon. We can&apos;t wait to dance with you!
          </p>

          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="h-px w-10 bg-[#F2B8CE]" />
            <Heart size={14} color="#FE9EED" />
            <div className="h-px w-10 bg-[#F2B8CE]" />
          </div>

          <p className="script text-[#FE9EED] text-xl mb-3">In the meantime, reach us at</p>
          <a
            href="tel:2506501391"
            className="rye text-2xl md:text-3xl text-[#6B4841] hover:text-[#FE9EED] transition-colors tracking-wide"
          >
            250-650-1391
          </a>
        </div>

        <p className="script text-[#D49C84] text-xl mt-10">
          It&apos;s more than a dance, it&apos;s a good time.
        </p>
      </div>
    </div>
  );
}
