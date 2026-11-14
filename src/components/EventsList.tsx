import whatComesNextPoster from "@/assets/what-comes-next-poster.jpg";

export function EventsList({ limit: _limit }: { limit?: number }) {
  return (
    <div className="mt-10 flex justify-center">
      <img
        src={whatComesNextPoster}
        alt="What Comes Next? — IEEE Student Branch, SRM IST Tiruchirappalli"
        className="w-full max-w-3xl rounded-lg shadow-lg"
      />
    </div>
  );
}
