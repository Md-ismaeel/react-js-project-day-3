import bgImage from "../Assets/20151217172611-young-woman-recruitment-interview-hiring-applicant-meeting-candidate-apply.webp";

const Body = () => {
  const data = [
    {
      desc: `Are you locking for 8 professional, registered massage therapist? Sample Mazzags Therapy has 4 registered massage
    therapists who can provide clinical massage.`,
    },
    {
      desc: `We sre committed to your long term hesith and well-being. Our multi-dizciplinary clinic provide: 8 balanced approach to » hesithy [Festyle. Enhance your health and improve your performance with cur trestments.`,
    },
    {
      desc: `We swmicome you to come explore all the benefitz you'll enjoy 82 one of our valued guests. Our profezsionsi staf iz committed to offering the
        ‘aszage therapy in Mainland.`,
    },
  ];
  return (
    <>
      <div className="w-full p-10 pt-16 bg-gray-300">
        <img src={bgImage} className="w-full h-screen rounded" />
      </div>

      <div className="w-full flex flex-col gap-16 justify-center items-center p-10 bg-primary text-white">
        <h1 className="text-4xl">Think Health. Think Massage.</h1>
        <p className="w-3/4 text-center text-lg">
          We are open Sam to 6pm; Monday through Sunday. if you would like to
          schedule an appointment ‘with us, please call us st 987-654-3210
          today!
        </p>
        <div className="flex gap-6">
          <button className=" border-solid border-2 border-white-500 p-3 rounded-md  active:bg-green-400  active:text-black active:translate-y-1">
            LEARN MORE ABOUT US
          </button>
          <button className=" border-solid border-2 border-white-500 p-3 rounded-md  active:bg-green-400  active:text-black active:translate-y-1">
            CONTACT US TODAY
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 mt-10 mb-5 p-5">
        {data.map((e, index) => {
          return (
            <p key={index} className="px-10 text-center text-lg">
              {e.desc}
            </p>
          );
        })}
      </div>
      <hr className="w-11/12 h-0.5 bg-gray-500 mt-2 m-auto" />
    </>
  );
};

export default Body;
