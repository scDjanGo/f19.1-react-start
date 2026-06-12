import BSkyButton from "../../../UI/buttons/BSkyButton";

function LatestEpisodesHeader() {
  return (
    <div className="flex items-center justify-between gap-3 mb-16">
      <h4 className="text-white text-[64px] font-normal">Latest episodes</h4>

      <BSkyButton>View all episodes</BSkyButton>
    </div>
  );
}

export default LatestEpisodesHeader;
