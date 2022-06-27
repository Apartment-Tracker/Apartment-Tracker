import React, { Component } from 'react';
import Header from "./Header.jsx";
import ApartmentForm from "./ApartmentForm.jsx";
import Apartments from "./Apartments.jsx";
import '../stylesheets/apartment.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aptIds: [], 
      aptsById: {},
      fetchedApts: false,
    };
    this.formatApartments = this.formatApartments.bind(this);
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then(({ apartments }) => {
        console.log('Found?', apartments);
        const { aptIds, aptsById } = this.formatApartments(apartments);
        return this.setState({ aptIds, aptsById, fetchedApts: false });
      })
      .catch(err => console.log('Main.componentDidMount: load apartments: Error: ', err));
  }

  formatApartments(apartments, state = this.state) {
    // Load current state props
    const aptIds = [...state.aptIds];
    const aptsById = JSON.parse(JSON.stringify(state.aptDate));
    let newAptId = state.aptIds.length;

    apartments.forEach((apt, index) => {
      // Set index of each apartment data
      if (newAptId) apt.id = ++newAptId;
      else apt.id = index+1;
      // Add each apartment data
      if (!aptsById[newAptId]) {
        aptIds.push(apt.id);
        aptsById[apt.id] = apt;
      }
    });
    return { aptIds, aptsById };
  }

  render() {
    const data = {
      aptIds: this.state.aptIds, 
      apartments: this.state.aptsById,
    };

    return (
      <div>
        <Header />
        <ApartmentForm />
        <Apartments {...data}/>
      </div>
    );
  }
};

export default Main;