export default function Hero() {
  return <section className="position-relative py-5">
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"></div>

    <div
      className="container position-relative zindex-2 py-lg-4"
      style={{ textAlign: "center" }}
    >
      <div className="d-flex flex-column pt-lg-4 pt-xl-5">
        <h5 className="my-2">Welcome!</h5>
        <h1 className="display-3 mb-4">
          Start using <span className="text-primary">Discord.uno</span> with No
          Limits
        </h1>
        <p className="fs-lg mb-5">
          Discord.uno is a free platform to advertise your Discord bots and
          servers. We provide a simple and easy to use interface to help you get
          started.
        </p>
        <div
          className="d-flex align-items-center mb-3 mb-lg-0 pb-4 pb-lg-0 pb-xl-5"
          style={{ justifyContent: "center", flexWrap: "wrap" }}
        >
          <span className="fs-sm">
            Currently, <span className="text-primary fw-semibold">100+</span>{" "}
            people are using Discord.uno
          </span>
        </div>
      </div>
    </div>
  </section>;
}
