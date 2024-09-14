export default function SkeletonDrinkCard() {
  return (
    <>
      <div className="overflow-hidden cursor-pointer animate-pulse">
        <img src="/skeleton-img.svg" alt="" />
      </div>

      <div className="p-5">
        <h2 className="h-[28px]"></h2>
        <button
          type="button"
          className="w-full h-[36px] py-1 mt-5 bg-gray-200  rounded-2xl animate-pulse"
        ></button>
      </div>
    </>
  );
}
