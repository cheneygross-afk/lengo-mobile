import SharkBiteIntro from "@/components/SharkBiteIntro";

// The very first thing the app shows on cold launch, before the
// login/home decision is even rendered. Plays once, then hands off.
export default function IntroScreen({ onFinish }: { onFinish: () => void }) {
  return <SharkBiteIntro onFinish={onFinish} />;
}
