import React from "react";
import "./Work.scss";

export default class MyWork extends React.Component {
  render() {
    return (
      <div
        id="work"
        // style={{ height: `calc(${window.innerHeight}px - 60px)` }}
        className="work-container"
        style={{ padding: "30px" }}
      >
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl space-y-8">
          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
              <div>
                <h3 className="font-medium">Core</h3>
                <p>
                  React.js, Angular, Vue.js, Next.js, TypeScript, JavaScript,
                  Node.js, HTML, CSS, SASS, GraphQL
                </p>
              </div>
              <div>
                <h3 className="font-medium">Architecture</h3>
                <p>
                  Micro-frontends, SPA, State Management, Component Based
                  Design, Performance Optimization
                </p>
              </div>
              <div>
                <h3 className="font-medium">Tooling</h3>
                <p>
                  Webpack, Git, npm, CI/CD, Google Cloud Platform, Browser
                  Storage, Jest
                </p>
              </div>
              <div>
                <h3 className="font-medium">Practices</h3>
                <p>
                  Agile/Scrum, Test Driven Development, Code Reviews, Sprint
                  Planning
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-1">
              Experience
            </h2>

            <div className="mt-4 space-y-6">
              {/* Walmart */}
              <div>
                <h3 className="text-lg font-bold">Walmart Global Tech</h3>
                <p className="text-sm text-gray-500">
                  Senior Software Engineer • 05/2022 - Present
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>
                    Led frontend development of the Network Inbound Optimizer
                    (NIO) module using React.js.
                  </li>
                  <li>
                    Adapted a Microfrontend architecture, reducing deployment
                    time by 70% through modular design.
                  </li>
                  <li>
                    Integrated Google Maps for shipment route rendering,
                    enhancing the transport tracking UX.
                  </li>
                </ul>
              </div>

              {/* DealerSocket */}
              <div>
                <h3 className="text-lg font-bold">
                  DealerSocket India Pvt. Ltd.
                </h3>
                <p className="text-sm text-gray-500">
                  Software Engineer II • 12/2020 - 04/2022
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>
                    Rebuilt the DealerFire Website Builder UI using Ember.js,
                    improving editor performance and enabling dynamic theme
                    customization.
                  </li>
                  <li>
                    Led the migration to CSS Custom Properties for scalable
                    theming across 200+ dealership websites.
                  </li>
                  <li>
                    Integrated automated testing into CI/CD pipelines, reducing
                    manual QA efforts and accelerating releases.
                  </li>
                </ul>
              </div>

              {/* SonicWall */}
              <div>
                <h3 className="text-lg font-bold">
                  SonicWall Technology Systems
                </h3>
                <p className="text-sm text-gray-500">
                  Software Development Engineer • 12/2017 - 11/2020
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>
                    Modernized legacy MySonicWall UI from AngularJS to Vue.js
                    with TypeScript and organizational Design Systems.
                  </li>
                  <li>
                    Mentored junior developers in implementing and debugging
                    frontend components.
                  </li>
                </ul>
              </div>

              {/* Gyansys */}
              <div>
                <h3 className="text-lg font-bold">Gyansys Infotech</h3>
                <p className="text-sm text-gray-500">
                  Associate Consultant – Software Development • 11/2015 -
                  11/2017
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>
                    Developed a Capital Expense workflow tool using React.js,
                    streamlining approvals and improving request tracking.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-1">
              Awards & Recognition
            </h2>
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-1">
              <li>
                <strong>Bravo Award, Walmart (Oct 2023):</strong> Recognized for
                excellence in UI development, feature launch, and successful
                microfrontend integration for the NIO platform.
              </li>
              <li>
                <strong>Star of the Month:</strong> Awarded for contributions to
                the Builder2 app, including implementing CSS Custom Properties
                for theming and developing the Device Switcher UI.
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
