import React from "react"
import FooterComponent from "./components/footer.component"
import HeaderComponent from "./components/header.component."
import "./styles/main.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: {
        previous: "",
        current: this.props.pageStates.INDEX,
      },
    }
  }

  setPage = ({ previous, current }) => {
    this.setState({
      page: {
        previous: previous,
        current: current,
      },
    })
  }

  render = () => {
    return (
      <main className="main-grid">
        <HeaderComponent />

        <div className="content">[Content]</div>

        <FooterComponent />
      </main>
    )
  }
}
