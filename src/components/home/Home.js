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

          {/* Title */}
          <p className="text-lg text-gray-600">Senior Software Engineer</p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-700 mt-3">
            <span>📞 +91 9591658586</span>
            <span>✉️ chandrasekhartiwari@gmail.com</span>
            <a
              href="https://www.linkedin.com/in/chandra-sekhar-tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 LinkedIn
            </a>
            <span>📍 Bangalore, India</span>
          </div>
        </div>
      </div>
    );
  }
}
