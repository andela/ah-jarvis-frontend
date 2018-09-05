import React from 'react';

const UserInfo = ({ onPublish }) => (
  <div className="row p-t--20 p-b--20">
    <div className="col s6 m1">
      <img
        src="https://randomuser.me/api/portraits/med/men/5.jpg"
        alt="nn"
        className="responsive-img circle"
      />
    </div>
    <div className="col s12 m9">
      <div className="m-b--15">
        <p>Dennis Wanjiru</p>
      </div>

      <div className="m-b--15 p-r--100">
        <p className="text--small">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
    <div className="col s12 m1">
      <div className="m-b--15">
        <button
          type="submit"
          className="waves-effect waves-light btn btn--rounded"
          onClick={onPublish}
        >
          Publish
        </button>
      </div>
    </div>
  </div>
);

export default UserInfo;
