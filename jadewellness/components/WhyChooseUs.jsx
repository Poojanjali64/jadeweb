"use client";
import { User, Network, Activity } from "lucide-react";
import "./whychooseus.css";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT GLASS CARD */}
        <div className="why-glass">
          <Feature
            icon={<User />}
            title="Personalized Approach"
            text="Focused on you, not just diseases."
          />
          <Feature
            icon={<Network />}
            title="Address The Root Cause"
            text="We deeply analyze history to treat the root cause."
          />
          <Feature
            icon={<Activity />}
            title="Improve Chronic Illness"
            text="Reversing chronic illness trends with care."
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content">
          <span className="why-tag">Why Choose Us</span>
          <h2>Wellness care tailored to your needs</h2>
          <p>
            We bridge the gap in healthcare by focusing on preventive,
            affordable, and holistic wellness solutions.
          </p>

          <div className="why-stats">
            <div>
              <strong>30+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>5K+</strong>
              <span>Happy Patients</span>
            </div>
            <div>
              <strong>10K+</strong>
              <span>Treatments</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="why-feature">
      <div className="why-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
