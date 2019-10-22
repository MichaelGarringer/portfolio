import React from "react"
import "./portfolio.css"
import Modal from "../components/modal.jsx"

class Portfolio extends React.Component {

  render() {

    return (
      <>
      
        <div class="row">
          <div class="col">
            <div className="imageHolder">
              <img src={require("../images/login-screen.jpg")} alt="crystal" style={{ width: "100%", height: "100%" }} />
              <div className="linksText">
                
              <div className="openModal" data-toggle="modal" data-target="#modal1">
Gift Scribe
</div>
<div class="modal" id="modal1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="https://giftscribe.herokuapp.com/" target="blank">Link to Project</a> ||
                <a href="https://github.com/rise-shine/Project-2" target="blank"> Repository</a>
                <div class="modal-text">
                  <br />
                  Technologies Used: Javascript, jQuery, React.js, CSS, MongoDB
                <br />
                <br />
                A simple app for tracking gift ideas for friends. User logs in and from there can create a list of friends and a list of ideas for each friend.
                <br />
                For full description, see the ReadMe on the project's GitHub page. 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" text-align="center">Close</button>
      </div>

    </div>
  </div>
</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="imageHolder">
              <img src={require("../images/crystals.png")} alt="crystal" style={{ width: "100%", height: "100%" }} />
              <div className="linksText">
              <div className="openModal" data-toggle="modal" data-target="#modal2">
Crystal Game 
</div>
<div class="modal" id="modal2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="https://michaelgarringer.github.io/CrystalGame/" target="blank">Link to Project</a> ||
                <a href="https://github.com/MichaelGarringer/CrystalGame" target="blank"> Repository</a>
                <br />
                <div class="modal-text">Technologies Used: Javascript, CSS
                <br />
                <br />
               A simple game created with Javascript. Each 'crystal' is assigned a random value on page load and a random target goal is also created.
               The user clicks the images to add value. If they reach the target goal, they win. If the value goes over the target goal, the user loses and the game restarts.
                <br />
                For full description, see the ReadMe on the project's GitHub page. 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" text-align="center">Close</button>
      </div>

    </div>
  </div>
</div>
              </div>
            </div>
          </div>
          <div class="col"><div className="imageHolder">
            <img src={require("../images/dbz.png")} alt="goku" style={{ width: "100%" }} />
            <div className="linksText">
            <div className="openModal" data-toggle="modal" data-target="#modal3">
DBZ Click Game 
</div>
<div class="modal" id="modal3">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="https://click-game-mike.herokuapp.com" target="blank">Link to Project</a> ||
                <a href="https://github.com/MichaelGarringer/click-game" target="blank"> Repository</a>
                <br />
                <br />
                <div class="modal-text">Technologies Used: Javascript, CSS, ReactJS
                <br />
                <br />
               A simple game created to show off React's ability to update the page without refreshing. The user clicks on each character in succession. If they click all characters with no repeats, a point is added and the game restarts. If they choose a character who has already been clicked they lose and the game resets.
                <br />
                For full description, see the ReadMe on the project's GitHub page. 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" text-align="center">Close</button>
      </div>

    </div>
  </div>
</div>
            </div>
          </div>
          </div>
        </div>
           
        {/* <div class="row">
          <div class="col">
            <div className="imageHolder">
              <img src={require("../images/login-screen.jpg")} alt="crystal" style={{ width: "100%", height: "100%" }} />
              <div className="linksText">
                
              <div className="openModal" data-toggle="modal" data-target="#modal1">
Project 4
</div>
<div class="modal" id="modal4">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="#" target="blank">Link to Project</a> ||
                <a href="#" target="blank"> Repository</a>
                <div class="modal-text">
                  <br />
                  Technologies Used: Javascript, jQuery, React.js, CSS, MongoDB
                <br />
                <br />
                A simple app for tracking gift ideas for friends. User logs in and from there can create a list of friends and a list of ideas for each friend.
                <br />
                For full description, see the ReadMe on the project's GitHub page. 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" text-align="center">Close</button>
      </div>

    </div>
  </div>
</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="imageHolder">
              <img src={require("../images/crystals.png")} alt="crystal" style={{ width: "100%", height: "100%" }} />
              <div className="linksText">
              <div className="openModal" data-toggle="modal" data-target="#modal2">
Project 5 
</div>
<div class="modal" id="modal5">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="#" target="blank">Link to Project</a> ||
                <a href="#" target="blank"> Repository</a>
                <br />
                <div class="modal-text">Technologies Used: Javascript, CSS
                <br />
                <br />
              
                <br />
                For full description, see the ReadMe on the project's GitHub page. 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" text-align="center">Close</button>
      </div>

    </div>
  </div>
</div>
              </div>
            </div>
          </div>
          <div class="col"><div className="imageHolder">
            <img src={require("../images/dbz.png")} alt="goku" style={{ width: "100%" }} />
            <div className="linksText">
            <div className="openModal" data-toggle="modal" data-target="#modal3">
Project 6
</div>
<div class="modal" id="modal6">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="#" target="blank">Link to Project</a> ||
                <a href="#" target="blank"> Repository</a>
                <br />
                <br />
                <div class="modal-text">Technologies Used: Javascript, CSS, ReactJS
                <br />
                <br />
               A simple game created to show off React's ability to update the page without refreshing. The user clicks on each character in succession. If they click all characters with no repeats, a point is added and the game restarts. If they choose a character who has already been clicked they lose and the game resets.
                <br />
                For full description, see the ReadMe on the project's GitHub page. 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" text-align="center">Close</button>
      </div>

    </div>
  </div>
</div>
            </div>
          </div>
          </div>
        </div> */}

      </>
    )
  }

}

export default Portfolio