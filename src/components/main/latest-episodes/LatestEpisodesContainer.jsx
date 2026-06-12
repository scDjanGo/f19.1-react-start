import LatestEpisodeCard from "./LatestEpisodeCard";

const EPISODES = [
  {
    id: 1,
    img: "/img/img-1.jpg",
    tag: "Gear",
    episode: 3,
    title: "Should you get outboard audio gear?",
    description:
      "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
  },
  {
    id: 2,
    img: "/img/img-2.jpg",
    tag: "Tips & Tricks",
    episode: 2,
    title: "Mic tricks to take you to the next level",
    description:
      "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
  },
  {
    id: 3,
    img: "/img/img-3.jpg",
    tag: "Gear",
    episode: 1,
    title: "The best microphone under $200",
    description:
      "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
  },
];

function LatestEpisodesContainer() {
  return (
    <div className="flex flex-col gap-15">
      {EPISODES.map((item, index) => (
        <LatestEpisodeCard key={item.id} cardData={item} />
      ))}
    </div>
  );
}

export default LatestEpisodesContainer;
