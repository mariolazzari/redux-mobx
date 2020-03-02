import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";

const App = ({ count, increment, decrement, reset }) => (
  <main className="container">
    <p className="count">{count}</p>
    <section className="controls">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  </main>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(App);
