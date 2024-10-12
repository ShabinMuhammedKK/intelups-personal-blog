import bgImg from "/assets/black-white-photo-surface-with-multiple-triangles.jpg";
import {Link} from 'react-router-dom'

const LandingHero = () => {
  return (
    <div
      className="flex-grow relative bg-right"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="bg-black inset-0 absolute max-sm:opacity-70 opacity-20"></div>
      <div className="absolute top-1/4  md:px-20 md:flex justify-center items-cente">
        <section className=" w-full">
          <div className="open-sans lg:w-1/2 tracking-tight max-md:leading-[4rem] xl:text-7xl md:text-6xl max-md:text-5xl font-semibold text-neutral-200 max-md:text-center max-md:pl-2 max-md:pr-4 xl:text-[6rem] xl:leading-[7rem] leading-[3rem] xl:font-normal max-sm:text-3xl">
            Exploring the layers of programming world
          </div>
          <div className="flex w-full py-3 px-2 mt-4 sm:mt-6 gap-2 xl:my-12 text-white justify-start max-md:justify-center items-center text-xs md:text-xs open-sans">
            <p>Languages</p>
            <p className="h-5 w-px bg-neutral-700 "></p>
            <p>Frameworks</p>
            <p className="h-5 w-px  bg-neutral-700"></p>
            <p>Technologies</p>
          </div>
          <div className="xl:mt-8 max-md:flex max-md:w-full max-md:justify-center max-md:mt-10 md:mt-5">
            <Link to="/feeds">
            <button className="text-black max-sm:text-sm sm:px-6 sm:py-3 py-2 px-4 bg-neutral-200 border rounded xl:py-3 xl:px-8 text-xl open-sans">
              Start reading
            </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingHero;
