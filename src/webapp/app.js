import React, { Component } from "react";
import "./App.css";
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />

            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
