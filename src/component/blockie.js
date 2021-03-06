import makeBlockie from "ethereum-blockies-base64";
import React from "react";
import PropTypes from 'prop-types';

function Blockie(props) {
  if (props.address !== ''){
    let www = "http://etherscan.io/address/" + props.address;
    return (
      <a href={www} target="_blank" rel="noopener noreferrer">
        <img src={makeBlockie(props.address)} alt="blockie"/>
      </a>
    );
  } else {
    return null;
  }
}

export default Blockie;

Blockie.defaultProps = {
  address: ''
};

Blockie.propTypes = {
  address: PropTypes.string
};