import { Container } from 'unstated';

export default class AppContainer extends Container {
  state = {
    currentActor: {
      name: '',
      quantity: 0,
      armorClass: 0,
      hitPoints: 0,
      initiative: 0,
      status: 'Dead'
    },
    actors: [],
  }

  currentActorName = name => {
    this.setState({
      currentActor: { ...this.state.currentActor, name: name }
    })
  }

  currentActorQuantity = quantity => {
    this.setState({
      currentActor: { ...this.state.currentActor, quantity: quantity }
    })
  }

  currentActorAC = armorClass => {
    this.setState({
      currentActor: { ...this.state.currentActor, armorClass: armorClass }
    })
  }

  currentActorHP = hitPoints => {
    this.setState({
      currentActor: { ...this.state.currentActor, hitPoints: hitPoints }
    })
  }

  currentActorInitiative = initiative => {
    this.setState({
      currentActor: { ...this.state.currentActor, initiative: initiative }
    })
  }

  resetCurrentActor() {
    this.setState({
      currentActor: {
        name: '',
        quantity: 0,
        armorClass: 0,
        hitPoints: 0,
        initiative: 0,
        status: ''
      }
    })
  }

  deleteActor = index => {
    let newActors = [...this.state.actors];
    if (index >= 0) {
      newActors.splice(index, 1);
      this.setState({actors: newActors});
    }
  }

  increaseActorHealth = index => {
    let newActors = [...this.state.actors];
    if(index >= 0) {
      newActors[index].hitPoints += 1;
      this.setState({actors: newActors});
    }
  }

  decreaseActorHealth = index => {
    let newActors = [...this.state.actors];
    if(index >= 0) {
      newActors[index].hitPoints -= 1;
      this.setState({actors: newActors});
    }
  }

  addActor = actor => {
    this.setState({
      actors: [...this.state.actors, actor]
    })
    this.resetCurrentActor()
  }
}