import React, { Component } from "react";

class TwoColumn extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          margin: "0 auto",
          width: "8.5in",
          height: "11in",
          backgroundColor: "#fff",
          boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header
          style={{
            color: this.props.headerTextColor,
            backgroundColor: this.props.headerColor,
            padding: "20px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <h1 style={{ margin: "0", fontSize: "2em" }}>{this.props.user.name}</h1>
            <h2 style={{ margin: "0", fontSize: "1.2em" }}>{this.props.user.wantedJobTitle}</h2>
          </div>
        </header>

        <div style={{ display: "flex", height: "85%" }}>
          <aside style={{ width: "25%", backgroundColor: "#f7f7f7", padding: "20px" }}>
            <section>
              <h3 style={{ marginBottom: "10px", fontSize: "1.1em" }}>SKILLS</h3>
              {this.props.user.skills ? (
                this.props.user.skills.split(",").map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      padding: "5px 10px",
                      margin: "5px 2px",
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: "5px",
                      fontSize: "0.9em",
                    }}
                  >
                    {skill}
                  </div>
                ))
              ) : (
                <div>No skills listed</div>
              )}
            </section>
            <section style={{ marginTop: "20px" }}>
              <h3 style={{ marginBottom: "10px", fontSize: "1.1em" }}>CONTACT</h3>
              <div style={{ marginBottom: "10px" }}>
                <svg
                  style={{ width: "20px", verticalAlign: "middle", marginRight: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {this.props.user.phone}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <svg
                  style={{ width: "20px", verticalAlign: "middle", marginRight: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {this.props.user.email}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <svg
                  style={{ width: "20px", verticalAlign: "middle", marginRight: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {this.props.user.location}
              </div>
            </section>
          </aside>
          <main style={{ width: "75%", padding: "20px" }}>
            {this.props.user.summary && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ marginBottom: "10px", fontSize: "1.1em" }}>SUMMARY</h3>
                <p style={{ fontSize: "0.9em", color: "#333" }}>{this.props.user.summary}</p>
              </section>
            )}

            {this.props.empCount > 0 && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ marginBottom: "10px", fontSize: "1.1em" }}>PROFESSIONAL EXPERIENCE</h3>
                {[...Array(this.props.empCount)].map((_, i) => (
                  <div key={`emp${i}`} style={{ marginBottom: "10px" }}>
                    <h4 style={{ margin: "0", fontSize: "1em" }}>
                      {this.props.employment.jobTitles[`jobTitle${i + 1}`]}
                    </h4>
                    <p style={{ margin: "0", fontSize: "0.9em" }}>
                      {this.props.employment.emp[`emp${i + 1}`]} |{" "}
                      {this.props.employment.jobStartDate[`jobStartDate${i + 1}`]} -{" "}
                      {this.props.employment.jobEndDate[`jobEndDate${i + 1}`] || "Present"}
                    </p>
                    <p style={{ fontSize: "0.9em", color: "#333" }}>
                      {this.props.employment.jobDesc[`jobDesc${i + 1}`]}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {this.props.projectCount > 0 && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ marginBottom: "10px", fontSize: "1.1em" }}>PROJECTS</h3>
                {[...Array(this.props.projectCount)].map((_, i) => (
                  <div key={`project${i}`} style={{ marginBottom: "10px" }}>
                    <h4 style={{ margin: "0", fontSize: "1em" }}>
                      {this.props.project.projectTitles[`projectTitle${i + 1}`]}
                    </h4>
                    <p style={{ margin: "0", fontSize: "0.9em" }}>
                      {this.props.project.projectStartDate[`projectStartDate${i + 1}`]} -{" "}
                      {this.props.project.projectEndDate[`projectEndDate${i + 1}`] || "Present"}
                    </p>
                    <p style={{ fontSize: "0.9em", color: "#333" }}>
                      {this.props.project.projectDesc[`projectDesc${i + 1}`]}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {this.props.eduCount > 0 && (
              <section style={{ marginBottom: "20px" }}>
                <h3 style={{ marginBottom: "10px", fontSize: "1.1em" }}>EDUCATION</h3>
                {[...Array(this.props.eduCount)].map((_, i) => (
                  <div key={`edu${i}`} style={{ marginBottom: "10px" }}>
                    <h4 style={{ margin: "0", fontSize: "1em" }}>
                      {this.props.education.qual[`qual${i + 1}`]}
                    </h4>
                    <p style={{ margin: "0", fontSize: "0.9em" }}>
                      {this.props.education.edu[`educ${i + 1}`]} |{" "}
                      {this.props.education.eduStartDate[`eduStartDate${i + 1}`]} -{" "}
                      {this.props.education.eduEndDate[`eduEndDate${i + 1}`] || "Present"}
                    </p>
                    <p style={{ fontSize: "0.9em", color: "#333" }}>
                      {this.props.education.eduDesc[`eduDesc${i + 1}`]}
                    </p>
                  </div>
                ))}
              </section>
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default TwoColumn;
