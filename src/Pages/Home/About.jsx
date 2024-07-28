const About = () => {
  return (
    <div
      className="max-w-[1800px] mx-auto px-4 sm:px-8 flex justify-center items-center py-16 flex-col"
      id="about"
    >
      <div className="head flex flex-col justify-center items-center">
        <h1 className="title text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
        <span className="title-span w-24 h-1 bg-green mt-2"></span>
      </div>

      <div className="content mt-12 sm:mt-28 flex flex-col lg:flex-row justify-center gap-10 pb-16 sm:pb-28 items-center">
        <div className="img relative w-[200px] sm:w-[250px] h-[280px] sm:h-[330px] border rounded-md">
          <img
            src="./ana.png"
            alt="Ahmed Kamal"
            className="absolute -top-2 -left-2 rounded-md w-full h-full object-cover"
          />
        </div>
        <div className="text w-full lg:w-[50%] flex flex-col justify-between mt-8 lg:mt-0">
          <div className="desc text-white/80 flex flex-col gap-3 text-base sm:text-lg">
            <p>
              My name is Ahmed Kamal Soliman, and I am an engineering student at
              Cairo University, Faculty of Engineering, Department of Computer
              Science. I am deeply passionate about technology and always eager
              to expand my knowledge in this ever-evolving field.
            </p>
            <p>
              My primary interests include web development, game development,
              and artificial intelligence. In web development, I have created
              various projects, such as e-commerce websites and the Typing Speed
              Game, honing my skills in HTML, CSS, JavaScript, and React.js.
              These projects taught me the importance of responsive design and
              efficient coding practices.
            </p>
            <p>
              As I continue my studies and projects, I remain dedicated to
              pursuing new opportunities to apply my knowledge, contribute to
              impactful projects, and stay at the forefront of technological
              advancements.
            </p>
          </div>
          <div className="info grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="col flex gap-4 sm:gap-10">
              <div className="titles font-semibold text-base sm:text-lg">
                <ul className="flex flex-col gap-4 sm:gap-8">
                  <li>Email:</li>
                  <li>Location:</li>
                  <li>Age:</li>
                </ul>
              </div>
              <div className="data text-white/80 text-base sm:text-lg">
                <ul className="flex flex-col gap-4 sm:gap-8">
                  <li>ahmd675asd@gmail.com</li>
                  <li>Hurghada, Egypt</li>
                  <li>20</li>
                </ul>
              </div>
            </div>

            <div className="col flex gap-4 sm:gap-10">
              <div className="titles font-semibold text-base sm:text-lg">
                <ul className="flex flex-col gap-4 sm:gap-8">
                  <li>Nationality:</li>
                  <li>Education:</li>
                  <li>Degree :</li>
                </ul>
              </div>
              <div className="data text-white/80 text-base sm:text-lg">
                <ul className="flex flex-col gap-4 sm:gap-8">
                  <li>Egyptian</li>
                  <li>Cairo University, Faculty of Engineering</li>
                  <li>Currently Student</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
