import React from "react"
import "./portfolio.css"
class Portfolio extends React.Component {

  render() {

    return (
      <>
        <div class="row">
          <div class="col">
            <div className="imageHolder">
              <a href="https://michaelgarringer.github.io/CrystalGame/" />
              <img src={require("../images/crystals.jpg")} alt="crystal" style={{ width: "100%", height:"100%"}} />
              <div className="linksText">
                <a href="https://michaelgarringer.github.io/CrystalGame/" target="blank">Crystal Game</a> || <a
                  href="https://github.com/MichaelGarringer/CrystalGame" target="blank">Repository</a>
              </div>
            </div>
          </div>
          <div class="col"><div className="imageHolder">
            <a href="" />
            <img src={require("../images/crystalball.jpg")} alt="crystal-ball" style={{ width: "100%" }} />
            <div className="linksText">
              <a href="https://michaelgarringer.github.io/CrystalGame/" target="blank"></a> Psychic Game || <a
                href="https://github.com/MichaelGarringer/CrystalGame" target="blank">Repository</a>
            </div>
          </div>
          </div>
          <div class="col"><div className="imageHolder">
            <a href="https://michaelgarringer.github.io/CrystalGame/" />
            <img src={require("../images/goku.png")} alt="crystal" style={{ width: "100%" }} />
            <div className="linksText">
              <a href="https://michaelgarringer.github.io/CrystalGame/" target="blank">Crystal Game</a> || <a
                href="https://github.com/MichaelGarringer/CrystalGame" target="blank">Repository</a>
            </div>
          </div>
          </div>
        </div>


      </>
    )
  }

}

export default Portfolio