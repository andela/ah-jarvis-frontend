import React from 'react';
import PropTypes from 'prop-types';

const Settings = ({ data, update }) => (
  <div>
    <div id="settings" className="col s12 p-t--30">
      <div className="item m-b--30 m-t--20">
        <div>
          <h5 className="item__title">Notifications</h5>
          <p className="item__body">
            We’ll email you when your network interacts with you on Author's Haven.
          </p>
        </div>

        <div className="switch">
          <label htmlFor="check">
              Off
            <input
              id="check"
              type="checkbox"
              value={data.get_notifications}
              checked={data.get_notifications}
              onChange={() => update()}
            />
            <span className="lever" />
              On
          </label>
        </div>
      </div>
      <hr />
      <div className="item m-t--50">
        <div>
          <h5 className="item__title">Upgrade to become a Authors member</h5>
          <p className="item__body">
            Unlock unlimited access to the best stories on Authors.
          </p>
        </div>

        <button type="button" className="btn btn-primary"> Upgrade </button>
      </div>

    </div>
  </div>
);

Settings.propTypes = {
  update: PropTypes.func.isRequired,
  data: PropTypes.shape(),
};

export default Settings;
