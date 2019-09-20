import React from 'react'

function  Modal () {

return(
<>

<div className="openModal" data-toggle="modal" data-target="#modal1">
Gift Scribe
</div>
<div class="modal" id="modal1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <a href="https://giftscribe.herokuapp.com/" target="blank">Link to Project</a> ||
                <a href="https://github.com/rise-shine/Project-2" target="blank"> Repository</a>
                <div class="modal-text">Technologies Used: Javascript, CSS, ReactJS, MongoDB
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
</>
)

}

export default Modal