function FoodCard({ image, title, summary }) {
  return (
    <div className="group w-[90%] sm:w-[220px] md:w-[280px] lg:w-[320px] bg-[#1B4332] rounded-2xl overflow-hidden shadow transition-all duration-500 ease-in-out transform-gpu hover:-translate-y-4 hover:shadow-lg mx-auto ">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform-gpu group-hover:scale-110"
        />
      </div>
      <h3 className="p-3 text-white text-lg font-poppins ">{title}</h3>
      <p className="p-3 text-white text-[10px] font-poppins">{summary}</p>
    </div>
  );
}
export default FoodCard;
