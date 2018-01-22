
var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function(){
        console.log("componentWillMount")
    },

    render: function() {
        return  React.createElement('div', {},
                React.createElement('h1', {}, this.props.title),
                React.createElement('div', {className: 'counter'}, 'Counter status: ' + this.state.counter),
                React.createElement('button', {onClick: this.increment},"Add"),
                React.createElement('button', {onClick: this.decrement},"Subtract")
        );  
    },
});

var element =React.createElement('div', {}, [ 
    React.createElement(Counter,{ title:"THE COUNTER NR 1 " }),
    React.createElement(Counter,{ title:"THE COUNTER NR 2 " }),
    React.createElement(Counter,{ title:"THE COUNTER NR 3 " })]);
ReactDOM.render(element, document.getElementById('app_1'));

