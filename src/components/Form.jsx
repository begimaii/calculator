import { Component } from "react";
import{MyContainer ,MyInput} from "./styledComponents/Styled"
import Tip from "./Tip";



class Form extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      service: 0.2,
      howManyPeople: 0,
      tip : 0,
      showTip: false
    };
  }

  calculateTip = () =>{
    const tip = (this.state.amount * this.state.service) / this.state.howManyPeople
    this.setState({...this.state,tip:tip.toFixed(2),showTip:true})
  }

  render() {
    return (
      <MyContainer>
        <h2>Tip Calculator</h2>
        <label htmlFor="amount">How much was your bill ?</label>
        <br />
        <MyInput
          type="number"
          name="amount"
          placeholder="write some amount"
          value={this.state.amount}
          onChange={(event) => {
            if (this.state.amount > 0) {
              this.setState({ ...this.state, amount: event.target.value });
            } else if (this.state.amount === "") {
              this.setState({ amount: 1 });
            } else {
              this.setState({ amount: 0 });
            }
          }}
        />
        <br />

        <label htmlFor="service">How was your service ?</label>
        <br />
        <select
          name="service"
          value={this.state.service}
          onChange={(event) =>
            this.setState({ ...this.state, service: event.target.value })
          }
        >
          <option value="0.3">30% Outstanding</option>
          <option value="0.2">20% Good</option>
          <option value="0.15">15% OK</option>
          <option value="0.1">10% not bad</option>
          <option value="0.05">5% it Sucks</option>
        </select>
        <br />

        <label htmlFor="numberOfPeople">
          How many people are sharing the bill?
        </label>
        <br />

        <MyInput
          type="number"
          name="numberOfPeople"
          placeholder="0"
          value={this.state.howManyPeople}
          onChange={(event) =>
            this.setState({ ...this.state, howManyPeople: event.target.value })
          }
        />
        <br />
        <button onClick={this.calculateTip}> Calculate</button>

        {this.state.tip >0  && <Tip tipAmount={this.state.tip}/>}
      </MyContainer>
    );
  }
}

export default Form;
