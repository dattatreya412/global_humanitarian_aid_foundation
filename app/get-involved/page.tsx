export default function Page() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="w-full h-52 bg-[#3F72AF] px-6 text-center pt-16">
        <h1 className="text-5xl md:text-3xl font-bold text-white py-12">
          Become a Volunteer
        </h1>
      </div>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#3F72AF]">
          Make a Difference Today
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed text-lg">
          Join us in making the world a better place. Your time, skills, and
          passion can create real change for children, families, and the
          community. Volunteering is more than service — it's impact.
        </p>
      </section>

      {/* Why Volunteer */}
      <section className="bg-[#DBE2EF] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#3F72AF]">Support Communities</h3>
            <p className="text-gray-600 mt-3">
              Help us uplift children and families through meaningful activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#3F72AF]">Grow Your Skills</h3>
            <p className="text-gray-600 mt-3">
              Gain leadership, communication, and teamwork experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#3F72AF]">Create Impact</h3>
            <p className="text-gray-600 mt-3">
              Every hour you give brings real change to someone’s life.
            </p>
          </div>

        </div>
      </section>

      {/* Volunteer Form */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl text-center font-semibold text-[#3F72AF]">
          Fill Out the Volunteer Form
        </h2>

        <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 border rounded-lg focus:outline-none focus:border-[#3F72AF]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 border rounded-lg focus:outline-none focus:border-[#3F72AF]"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 border rounded-lg focus:outline-none focus:border-[#3F72AF]"
          />

          <input
            type="text"
            placeholder="City / Location"
            className="p-4 border rounded-lg focus:outline-none focus:border-[#3F72AF]"
          />

          <textarea
            rows={5}
            placeholder="Why do you want to volunteer?"
            className="p-4 border rounded-lg focus:outline-none focus:border-[#3F72AF] md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 w-full py-4 bg-[#3F72AF] text-white font-semibold rounded-lg hover:bg-[#2F5D95] transition"
          >
            Submit Application
          </button>

        </form>
      </section>

    </div>
  );
}
