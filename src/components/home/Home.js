import React from "react";
import spiderweb from "../../images/spider.svg";
import "./Home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.shiftX = 0;
    this.shiftY = 0;
    this.containerRef = React.createRef();
    this.state = {
      transformIcon: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
    };
  }
  componentDidMount() {}

  onMouseMove(e) {
    this.shiftX = e.clientX ? -e.clientX / 20 : 0;
    this.shiftY = e.clientY ? -e.clientY / 20 : 0;
    this.setState({
      transformIcon: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${this.shiftX}, ${this.shiftY}, 0, 1)`,
    });
  }
  render() {
    return (
      <div
        id="home"
        ref={this.containerRef}
        // style={{ height: `calc(${window.innerHeight}px - 60px)` }}
        className="container"
        onMouseMove={this.onMouseMove.bind(this)}
      >
        <img
          className="moving-spider"
          style={{ transform: this.state.transformIcon }}
          src={spiderweb}
        />

        <div
          style={{ margin: "30px" }}
          className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl text-center space-y-2"
        >
          {/* Name */}
          <h1 className="text-2xl font-bold text-gray-800">
            CHANDRASEKHAR TIWARI
          </h1>
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-700 mt-3">
            <span>📞 +91 9591658586 | </span>
            <span>✉️ chandrasekhartiwari@gmail.com | </span>
            <a
              href="https://www.linkedin.com/in/chandra-sekhar-tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 LinkedIn | 
            </a>
            <span> 📍 Bangalore, India</span>
          </div>
          {/* Header / Summary */}
          <section>
            <h1 className="text-2xl font-bold text-gray-800">
              Senior Frontend Engineer
            </h1>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Senior Frontend Engineer with over 9 years of experience building
              performant, scalable web applications using React.js, Angular, and
              Vue.js. Proven track record in architecting microfrontend
              solutions, mentoring junior developers, and delivering
              enterprise-grade user interfaces across e-commerce and SaaS
              platforms.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
