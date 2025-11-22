export default function TourCard({ image, title }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover duration-520 hover:scale-[1.12]"/>
      <div className=" absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center">
        <span className="bg-black/50 text-white font-bold text-lg px-4 py-2 ">{title}</span>
      </div>
    </div>
  );
}
