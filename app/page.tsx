import {
  Workwith,
  ConnectWithMe,
  HeroAboutMe,
  Projects,
} from "./components/blocks";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col gap-2">
          <HeroAboutMe />
          <ConnectWithMe />
          <Workwith />
          <Projects />
        </div>
      </main>
    </>
  );
}
