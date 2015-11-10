var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;

this.Router = React.createClass({
  componentDidMount: function() {
    console.log(ReactRouter);
  },
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Main</Link></li>
            <li><Link to="contacts">Contacts</Link></li>
          </ul> 
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={Router}>
    <DefaultRoute handler={CommentBox} />
    <Route name="contacts" path="/contacts" handler={Contacts} />
  </Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler) {
  ReactDOM.render(<Handler/>, document.getElementById('app'));
});
