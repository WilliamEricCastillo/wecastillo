import React from "react";
import "./stylesheets/experience.css";
import { FaChartLine, FaCode, FaLaptopCode, FaDesktop, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

function ExperienceMeta({ details }) {
    const [date, location] = details.split("|").map((part) => part.trim());
    return (
        <>
            <p className="meta-date">{date}</p>
            {location && (
                <p className="meta-location">
                    <FaMapMarkerAlt className="meta-pin" />
                    {location}
                </p>
            )}
        </>
    );
}

function Experience() {
    return (
        <>
            <div className="section-title-frame">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>
                <h2 className="section-title">Experience</h2>
            </div>
            <div className="section-underline"></div>
            <p className="section-subtitle">A journey through impactful roles and real-world problem solving.</p>

            <div className="experience-card">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>

                <div className="experience-timeline">
                    <div className="timeline-line"></div>

                    {/* NEWEST ROLE */}
                    <div className="experience-row">
                        <div className="experience-meta">
                            <ExperienceMeta details="Jun 2026 - Present | Taylor, Texas, United States" />
                            <span className="type-badge accent-cyan">Full-time</span>
                        </div>
                        <div className="timeline-col">
                            <span className="timeline-dot accent-cyan"></span>
                        </div>
                        <div className="experience-content">
                            <div className="block-header">
                                <div className="block-icon accent-cyan"><FaChartLine/></div>
                                <div className="title-company">
                                    <h2 className="job-title">GDP Analyst I</h2>
                                    <h3 className="company-name accent-cyan">ERCOT</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-row">
                        <div className="experience-meta">
                            <ExperienceMeta details="Dec 2025 - Jun 2026 | Taylor, Texas, United States" />
                            <span className="type-badge accent-purple">Full-time</span>
                        </div>
                        <div className="timeline-col">
                            <span className="timeline-dot accent-purple"></span>
                        </div>
                        <div className="experience-content">
                            <div className="block-header">
                                <div className="block-icon accent-purple"><FaChartLine/></div>
                                <div className="title-company">
                                    <h2 className="job-title">GDP Analyst</h2>
                                    <h3 className="company-name accent-purple">ERCOT</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-row">
                        <div className="experience-meta">
                            <ExperienceMeta details="Jun 2025 - Aug 2025 · 3 mos | Taylor, Texas, United States · Hybrid" />
                            <span className="type-badge accent-pink">Internship</span>
                        </div>
                        <div className="timeline-col">
                            <span className="timeline-dot accent-pink"></span>
                        </div>
                        <div className="experience-content">
                            <div className="block-header">
                                <div className="block-icon accent-pink"><FaCode/></div>
                                <div className="title-company">
                                    <h2 className="job-title">Application Developer Intern</h2>
                                    <h3 className="company-name accent-pink">ERCOT</h3>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    Designed and implemented an Interconnection Dashboard within the RIOO web application using
                                    Angular 19, Java, and Oracle PL/SQL, enhancing data visibility for grid operations and planning.
                                </li>
                                <li>
                                    Developed backend Java APIs and optimized SQL/PL/SQL queries to retrieve and present
                                    interconnection request data.
                                </li>
                                <li>
                                    Created interactive UI components with HighCharts, HTML, CSS, and Bootstrap, integrating
                                    them into the RIOO system’s navigation for a seamless user experience.
                                </li>
                                <li>
                                    Leveraged Apache Tomcat, Apache Server, and Maven throughout development and build processes
                                    to ensure reliable testing and deployment.
                                </li>
                                <li>
                                    Managed source code and collaborated effectively with team members using Git, JIRA, and
                                    Bitbucket.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-row">
                        <div className="experience-meta">
                            <ExperienceMeta details="Jun 2024 - Aug 2024 · 3 mos | Taylor, Texas, United States · Hybrid" />
                            <span className="type-badge accent-cyan">Internship</span>
                        </div>
                        <div className="timeline-col">
                            <span className="timeline-dot accent-cyan"></span>
                        </div>
                        <div className="experience-content">
                            <div className="block-header">
                                <div className="block-icon accent-cyan"><FaLaptopCode/></div>
                                <div className="title-company">
                                    <h2 className="job-title">Information Technology Intern</h2>
                                    <h3 className="company-name accent-cyan">ERCOT</h3>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    Designed and developed a Power BI dashboard to visualize and analyze Jira issue tracker data
                                    from Oracle DB.
                                </li>
                                <li>
                                    Conducted data extraction, transformation, and analysis using SQL and Power BI to identify
                                    trends in task completion times and areas for process improvement in the Change Management
                                    process.
                                </li>
                                <li>
                                    Collaborated with the Release & Change Management team to understand and analyze data on
                                    change request submissions, tracking progress and outcomes to ensure SLA compliance.
                                </li>
                                <li>Participated in Change Advisory Board (CAB) meetings.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-row">
                        <div className="experience-meta">
                            <ExperienceMeta details="Mar 2024 - Present | Austin, Texas, United States · On-site" />
                            <span className="type-badge accent-purple">Full-time</span>
                        </div>
                        <div className="timeline-col">
                            <span className="timeline-dot accent-purple"></span>
                        </div>
                        <div className="experience-content">
                            <div className="block-header">
                                <div className="block-icon accent-purple"><FaDesktop/></div>
                                <div className="title-company">
                                    <h2 className="job-title">Desktop Support Specialist</h2>
                                    <h3 className="company-name accent-purple">The University of Texas at Austin</h3>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    Collaborated in the migration of macOS computers to a central management system,
                                    transitioning from an obsolete server to a campus-wide JAMF management server.
                                </li>
                                <li>
                                    Utilized Beyond Trust software and macOS ScreenSharing to remotely access and troubleshoot
                                    user computers.
                                </li>
                                <li>
                                    Managed service requests and reported issues through the ServiceNow ticketing system.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-row">
                        <div className="experience-meta">
                            <ExperienceMeta details="Oct 2017 - Aug 2022 · 5 yrs | Austin, Texas, United States" />
                            <span className="type-badge accent-pink">Full-time</span>
                        </div>
                        <div className="timeline-col">
                            <span className="timeline-dot accent-pink"></span>
                        </div>
                        <div className="experience-content">
                            <div className="block-header">
                                <div className="block-icon accent-pink"><FaShieldAlt/></div>
                                <div className="title-company">
                                    <h2 className="job-title">Quality Analyst: Trust & Safety</h2>
                                    <h3 className="company-name accent-pink">Accenture / BCforward</h3>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    Handled intellectual property and content policy issues, reviewing and resolving
                                    infringement reports.
                                </li>
                                <li>
                                    Provided feedback on emerging industry trends and recommended improvements to internal tools.
                                </li>
                                <li>
                                    Managed high-priority cases involving high-revenue clients.
                                </li>
                                <li>
                                    Collaborated with cross-functional global teams on trust and safety strategies.
                                </li>
                                <li>
                                    Maintained up-to-date knowledge of international intellectual property laws and policies.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience-footer">
                    <span className="footer-tag">&lt;/&gt;</span>
                    <p>
                        Always <span className="accent-cyan">learning</span>. Always <span className="accent-purple">building</span>. Always <span className="accent-pink">improving</span>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Experience;
