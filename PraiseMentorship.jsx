// PraiseMentorship.jsx
import React from 'react';

export default function PraiseMentorship() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/mentorship-group.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold">P.R.A.I.S.E. Mentorship</h1>
          <p className="mt-4 text-xl">A Comprehensive Program for Growth and Development</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-16">
        {/* Mission Statement */}
        <section id="mission" className="text-center">
          <img src="/images/who-we-are.jpg" alt="Who we are" className="mx-auto rounded shadow-md mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg">
            <strong>P.R.A.I.S.E. Mentorship</strong> empowers children, teens, and adults through workshops and guidance rooted in <strong>Patience</strong>, <strong>Respect</strong>, <strong>Advocacy</strong>, <strong>Interactiveness</strong>, <strong>Self-Expression</strong>, and <strong>Encouragement</strong>. We support personal growth, education, and well-being. Together, we replace “I can’t” with <strong>“I CAN!”</strong>
          </p>
        </section>

        {/* Core Values */}
        <section id="values" className="text-center">
          <img src="/images/what-we-do.jpg" alt="Core Values" className="mx-auto rounded shadow-md mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Core Values</h2>
          <p className="text-lg">Patience, Respect, Advocacy, Interactive Self-Expression, Encouragement</p>
        </section>

        {/* Program Overview Slides */}
        <section id="program-overview" className="text-center">
          <img src="/images/get-involved.jpg" alt="Get Involved" className="mx-auto rounded shadow-md mb-4" />
          <h2 className="text-3xl font-semibold mb-2">Program Overview</h2>
          <p className="text-lg mb-4">Explore our full presentation to learn more about our mission, strategy, and workshops for kids and adults.</p>
          <a href="/PraiseMentorshipSlideDeck.pdf" target="_blank" className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">📄 View Full Slide Deck</a>
          <div className="mt-2">
            <a href="/PraiseMentorshipSlideDeck.pdf" download className="text-blue-600 underline">⬇️ Download Slide Deck</a>
          </div>
          <div className="mt-4">
            <iframe
              src="/PraiseMentorshipSlideDeck.pdf"
              className="w-full h-[600px] border"
              title="Slide Preview"
            ></iframe>
          </div>
        </section>

        {/* Optional: Meet the Team */}
        <section id="team" className="text-center">
          <h2 className="text-3xl font-semibold mb-2">Meet the Team</h2>
          <p className="text-lg mb-4">Introducing our dedicated team members.</p>
          {/* Example Team Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/team1.jpg" alt="Team Member 1" className="rounded shadow-md" />
            <img src="/images/team2.jpg" alt="Team Member 2" className="rounded shadow-md" />
            <img src="/images/team3.jpg" alt="Team Member 3" className="rounded shadow-md" />
            <img src="/images/team4.jpg" alt="Team Member 4" className="rounded shadow-md" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg mb-4">Have questions? Want to get involved? Reach out below.</p>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" required />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" required />
            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded" rows="4" required></textarea>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="text-center text-sm py-6 bg-gray-100 mt-16">
        &copy; {new Date().getFullYear()} P.R.A.I.S.E. Mentorship. All rights reserved.
      </footer>
    </div>
  );
}