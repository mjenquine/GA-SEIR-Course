const React = require('react');
const Default = require('./layouts/Default')
class Show extends React.Component {
    render(){
        return (
            <Default title={`${this.props.fruit.name.toUpperCase()} Show Page`} page={`${this.props.fruit.name.toUpperCase()} Show Page`}>
                The { this.props.fruit.name } is { this.props.fruit.color }.
                { this.props.fruit.readyToEat ? ` It is ready to eat` : ` It is not ready to eat` }
            </Default>
        )
    }
}
module.exports = Show;
