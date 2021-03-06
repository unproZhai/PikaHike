import React, { Component } from 'react';
import Moment from 'react-moment';

class GroupTripsCantDelete extends Component {

  render() {
    const tripItems = this.props.group.trip.map(trp => (
      <li key={trp._id} className="d-flex list-group-item justify-content-center align-items-center flex-column bg-light">
        <h4 >{trp.name}</h4>
        <p>
          Date: <Moment format="MM/YY">{trp.date}</Moment> 
        </p>
        <p>
          {trp.location === '' ? null : (
            <span>
              Location: {trp.location} 
            </span>
          )}
        </p>
        <p>
          {trp.difficulty === '' ? null : (
            <span>
              Difficulty: {trp.difficulty}
            </span>
          )}
        </p>
        <p>
          About:
        </p>
        <p>
          {trp.description === '' ? null : (
            <span>
              {trp.description}
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-dark">Trips/Hikes</h3>
            {tripItems.length > 0 ? (
              <ul className="list-group list-group-flush">{tripItems}</ul>
            ) : (
                <p className="d-flex flex-wrap justify-content-center align-items-center">No Trips Listed</p>
              )}
          </div>
        </div>
      </div>
    );
  }
}


export default (GroupTripsCantDelete);