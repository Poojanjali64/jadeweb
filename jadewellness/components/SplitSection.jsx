"use client";
import "./split-section.css";

export default function SplitSection() {
  return (
    <section className="split">
      <div className="split-heading">
  <span className="accent-dot"></span>
  <h2>A science-backed healing model</h2>
</div>
<p className="split-sub">
  We focus on diagnostics, lifestyle medicine, and root-cause treatment.
</p>

      <div className="split-cards">
        <div className="split-card">
  <span className="card-icon">🧪</span>
  <h4>Advanced Diagnostics</h4>
</div>

        <div className="split-card">
  <span className="card-icon">🧪</span>
  <h4>Root cause analysis

  </h4>
</div>
        <div className="split-card">
  <span className="card-icon">🧪</span>
  <h4>personalized Therapy
    
  </h4>
</div>
       <div className="split-card">
  <span className="card-icon">🧪</span>
  <h4>Preventive care
    
  </h4>
</div>
      </div>
    </section>
  );
}
