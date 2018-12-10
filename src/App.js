import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import AppContainer from './Containers/AppContainer'
import * as _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      actors: [],
    }

    this.nameRef = React.createRef()
    this.armorClassRef = React.createRef()
    this.hitPointsRef = React.createRef()
    this.initiativeRef = React.createRef()
  }

  handleNameChange = currentActorName => {
    currentActorName(this.nameRef.current.value)
  }

  handleArmorClassChange = currentActorAC => {
    currentActorAC(this.armorClassRef.current.value)
  }

  handleHitPointsChange = currentActorHP => {
    currentActorHP(this.hitPointsRef.current.value)
  }

  handleInitiativeChange = currentActorInitiative => {
    currentActorInitiative(this.initiativeRef.current.value)
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {appContainer => (
          <div className="App container mx-auto">
            <h1 className="text-5xl text-white pt-4">
              <i className="fab fa-d-and-d text-red font-normal" /> Initiative Tracker
            </h1>
            <div className="flex content-center flex-wrap">
              <div className="w-full bg-grey-light mb-4 mt-4 rounded-sm p-4">
                <div>
                  <label
                    htmlFor="actorName"
                    className="block text-grey-darker text-sm font-bold mb-2">
                    <i className="fas fa-male" /> Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="actorName"
                    placeholder="Character Name"
                    ref={this.nameRef}
                    onChange={() => this.handleNameChange(appContainer.currentActorName)}
                    value={appContainer.state.currentActor.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="armorClass"
                    className="block text-grey-darker text-sm font-bold mb-2">
                    <i className="fas fa-shield-alt" /> Armor Class
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    name="armorClass"
                    placeholder="Armor Class"
                    ref={this.armorClassRef}
                    onChange={() => this.handleArmorClassChange(appContainer.currentActorAC)}
                    value={appContainer.state.currentActor.armorClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="hitPoints"
                    className="block text-grey-darker text-sm font-bold mb-2">
                    <i className="fas fa-heart" /> Hit Points
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    name="hitPoints"
                    placeholder="Hit Points"
                    ref={this.hitPointsRef}
                    onChange={() => this.handleHitPointsChange(appContainer.currentActorHP)}
                    value={appContainer.state.currentActor.hitPoints}
                  />
                </div>
                <div>
                  <label
                    htmlFor="initiative"
                    className="block text-grey-darker text-sm font-bold mb-2">
                    <i className="fas fa-bolt" /> Initiative
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    name="initiative"
                    placeholder="Initiative"
                    ref={this.initiativeRef}
                    onChange={() =>
                      this.handleInitiativeChange(appContainer.currentActorInitiative)
                    }
                    value={appContainer.state.currentActor.initiative}
                  />
                </div>
                <div>
                  <button
                    className="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded w-full"
                    onClick={() => appContainer.addActor(appContainer.state.currentActor)}>
                    Add Character
                  </button>
                </div>
              </div>
            </div>
            <div>
              {_.orderBy(appContainer.state.actors, ['initiative'], ['desc']).map(
                (actor, index) => (
                  <div
                    className="w-full bg-grey-light mb-4 mt-4 rounded-sm p-4"
                    key={index}
                    id={index}>
                    <div className="float-left text-3xl">{actor.name}</div>
                    <div className="float-right">
                      <div className="float-right ml-2 text-white">
                        <button
                          onClick={() => appContainer.deleteActor(index)}
                          className="bg-red hover:bg-red-light text-white font-bold py-2 px-4 border-red-dark hover:border-red rounded">
                          <i className="fas fa-times" /> Delete
                        </button>
                      </div>
                      <div className="float-right inline-flex">
                        <button
                        className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l"
                          onClick={() => appContainer.increaseActorHealth(index)}>
                          +
                        </button>
                        <button
                        className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r"
                          onClick={() => appContainer.decreaseActorHealth(index)}>
                          -
                        </button>
                      </div>
                      <div className="float-right p-2 bg-green rounded-sm ml-2 text-white">
                        <span>
                          <i className="fas fa-heart" /> {actor.hitPoints}
                        </span>
                      </div>

                      <div className="float-right p-2 bg-blue rounded-sm ml-2 text-white">
                        <span>
                          <i className="fas fa-shield-alt" /> {actor.armorClass}
                        </span>
                      </div>
                      <div className="float-right p-2 bg-orange-light rounded-sm ml-2 text-white">
                        <span>
                          <i className="fas fa-bolt" /> {actor.initiative}
                        </span>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </Subscribe>
    )
  }
}

export default App
