import React from 'react';

function compareQuery(props) {

const results = props.persons.filter(
  function(person) {
      return person.name === props.query
  }
)

    return (
      <div>
        {results}
      </div>
    );
}

export default compareQuery;
