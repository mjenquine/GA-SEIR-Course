const React = require('react');
const Default = require('./layouts/Default')

class Index extends React.Component {
  render() {
    return (
      <Default title="Fruits Index Page" page="Fruits Index Page">
          <ul>
            {
              this.props.fruits.map((fruit, i) => {
                return (
                  <li key={i}>
                    The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color} {' '}
                    { fruit.readyToEat
                      ?`It is ready to eat`
                      : `It is not ready to eat` }
                  </li>
                )
              })
            }
          </ul>
      </Default>
    );
  }
}

module.exports = Index;
