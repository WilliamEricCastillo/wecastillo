import React from "react";
import "./stylesheets/experience.css";

function Experience() {
    return (
        <>
            <p id="experience-title">Experience</p>

            <div id="experience" className="experience-container">

                <div className="experience-block">
                    <div className="title-company">
                        <h2 className="job-title">Application Developer Intern</h2>
                        <h3 className="company-name">ERCOT</h3>
                    </div>
                    <p className="experience-details">Jun 2025 - Aug 2025 · 3 mos | Taylor, Texas, United States ·
                        Hybrid</p>
                    <ul>
                        <li>Designed and implemented an Interconnection Dashboard within the RIOO web application using
                            Angular 19, Java, and Oracle PL/SQL, enhancing data visibility for grid operations and
                            planning.
                        </li>
                        <li>Developed backend Java APIs and optimized SQL/PL/SQL queries to retrieve and present
                            interconnection request data.
                        </li>
                        <li>Created interactive UI components with HighCharts, HTML, CSS, and Bootstrap, integrating
                            them into the RIOO system’s navigation for a seamless user experience.
                        </li>
                        <li>Leveraged Apache Tomcat, Apache Server, and Maven throughout development and build processes
                            to ensure reliable testing and deployment.
                        </li>
                        <li>Managed source code and collaborated effectively with team members using Git, JIRA, and
                            Bitbucket.
                        </li>
                    </ul>
                </div>

                <div className="experience-block">
                    <div className="title-company">
                        <h2 className="job-title">Information Technology Intern</h2>
                        <h3 className="company-name">ERCOT</h3>
                    </div>
                    <p className="experience-details">Jun 2024 - Aug 2024 · 3 mos | Taylor, Texas, United States ·
                        Hybrid</p>
                    <ul>
                        <li>Designed and developed a Power BI dashboard to visualize and analyze Jira issue tracker data
                            from Oracle DB.
                        </li>
                        <li>Conducted data extraction, transformation, and analysis using SQL and Power BI to identify
                            trends in task completion times and areas for process improvement in the Change Management
                            process.
                        </li>
                        <li>Collaborated with the Release & Change Management team to understand and analyze data on
                            change request submissions, tracking progress and outcomes to ensure SLA compliance.
                        </li>
                        <li>Participated in Change Advisory Board (CAB) meetings.</li>
                    </ul>
                </div>

                <div className="experience-block">
                    <div className="title-company">
                        <h2 className="job-title">Desktop Support Specialist</h2>
                        <h3 className="company-name">The University of Texas at Austin</h3>
                    </div>
                    <p className="experience-details">Mar 2024 - Present · 3 mos | Austin, Texas, United States ·
                        On-site</p>
                    <ul>
                        <li>Collaborated in the migration of macOS computers to a central management system,
                            transitioning from an obsolete server to a campus-wide JAMF management server, enhancing
                            system integration and management.
                        </li>
                        <li>Utilized Beyond Trust software and macOS ScreenSharing to remotely access and troubleshoot
                            user computers, ensuring efficient resolution of technical issues and enhancing user
                            satisfaction and productivity.
                        </li>
                        <li>Managed service requests and reported issues through the ServiceNow ticketing system,
                            prioritizing and resolving tickets effectively.
                        </li>
                    </ul>
                </div>


                <div className="experience-block">
                    <div className="title-company">
                        <h2 className="job-title">Quality Analyst: Trust & Safety</h2>
                        <h3 className="company-name">Accenture / BCforward</h3>
                    </div>
                    <p className="experience-details">Oct 2017 - Aug 2022 · 5 yrs | Austin, Texas, United States</p>
                    <ul>
                        <li>Handled intellectual property and content policy issues, reviewing and resolving
                            infringement reports to protect client assets and maintain platform integrity.
                        </li>
                        <li>Provided feedback on emerging industry trends, potential escalations, and recommended
                            improvements to internal tools and workflows.
                        </li>
                        <li>Managed high-priority cases involving high-revenue clients, ensuring timely resolutions
                            while maintaining accuracy and compliance with company policies.
                        </li>
                        <li>Collaborated with cross-functional global teams to develop and implement effective trust and
                            safety strategies for content moderation and intellectual property protection.
                        </li>
                        <li>Maintained up-to-date knowledge of international intellectual property laws, digital content
                            policies, and best practices to support consistent and informed decision-making.
                        </li>
                    </ul>
                </div>


            </div>
        </>
    );
}

export default Experience;
