export default function Starts({ count }) {
  return (
    <div className="flex items-center justify-center py-100 gap-1.25 flex-wrap">
      {Array.from({ length: count }).map((_, index) => (
        <img key={index} src={`/svg/star.svg`} alt="star" />
      ))}
    </div>
  );
}
