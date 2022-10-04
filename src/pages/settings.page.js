import React from "react"

// const SettingsPage = () => {
//   return (
//     <>
//       <h2 className="page-heading p-b-400">Settings</h2>

//       <form action="#" className="settings-form">
//         <div className="form-group-flex">
//           <label for="theme" className="form-label">
//             Theme
//           </label>
//           <select name="theme" id="theme" className="form-input">
//             <option value="">Default</option>
//             <option value="them-dark">Dark</option>
//             <option value="theme-blue-gray">Blue-Gray</option>
//             <option value="theme-pretty">Pretty Pink</option>
//             <option value="theme-professional">Professional</option>
//             <option value="theme-lamborghini">Lamborghini</option>
//             <option value="theme-tehtarik">Teh Tarik</option>
//           </select>
//         </div>

//         <div className="form-group-flex">
//           <label for="translation" className="form-label">
//             Preferred Translation
//           </label>
//           <select name="translation" id="translation" className="form-input">
//             <option value="KJV">King James Version (KJV)</option>
//             <option value="YLT">Young's Literal Translation (YLT)</option>
//           </select>
//         </div>

//         <div className="form-group-flex">
//           <label for="size" className="form-label">
//             Text Size
//           </label>
//           <select name="size" id="size" className="form-input">
//             <option value="regular">Regular</option>
//             <option value="large">Large</option>
//           </select>
//         </div>

//         <p className="clr-danger-400">
//           Click "save" for changes to take place.
//         </p>

//         <div className="form-buttons-flex">
//           <button className="btn btn-primary" type="button">
//             Save
//           </button>
//           <button className="btn btn-secondary" type="button">
//             Reset
//           </button>
//         </div>
//       </form>
//     </>
//   )
// }

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: "",
      preferredTranslation: "",
      textSize: "",
    }
  }

  themeChangeHandler = (e) => {
    this.setState({
      theme: e.target.value,
    })
  }

  preferredTranslationChangeHandler = (e) => {
    this.setState({
        defaultTranslation: e.target.value,
    })
  }

  textSizeChangeHandler = (e) => {
    this.setState({
        textSize: e.targer.value,
    })
  }

  render = () => {
    return (
      <>
        <h2 className="page-heading p-b-400">Settings</h2>

        <form action="#" className="settings-form">
          <div className="form-group-flex">
            <label for="theme" className="form-label">
              Theme
            </label>
            <select name="theme" id="theme" className="form-input" onChange={this.themeChangeHandler}>
              <option value="">Default</option>
              <option value="theme-dark">Dark</option>
              <option value="theme-blue-gray">Blue-Gray</option>
              <option value="theme-pretty">Pretty Pink</option>
              <option value="theme-professional">Professional</option>
              <option value="theme-lamborghini">Lamborghini</option>
              <option value="theme-tehtarik">Teh Tarik</option>
            </select>
          </div>

          <div className="form-group-flex">
            <label for="translation" className="form-label">
              Preferred Translation
            </label>
            <select name="translation" id="translation" className="form-input" onChange={this.preferredTranslationChangeHandler}>
              <option value="KJV">King James Version (KJV)</option>
              <option value="YLT">Young's Literal Translation (YLT)</option>
            </select>
          </div>

          <div className="form-group-flex">
            <label for="size" className="form-label">
              Text Size
            </label>
            <select name="size" id="size" className="form-input" onChange={this.textSizeChangeHandler}>
              <option value="regular">Regular</option>
              <option value="large">Large</option>
            </select>
          </div>

          <p className="clr-danger-400">
            Click "save" for changes to take place.
          </p>

          <div className="form-buttons-flex">
            <button className="btn btn-primary" type="button">
              Save
            </button>
            <button className="btn btn-secondary" type="button">
              Reset
            </button>
          </div>
        </form>
      </>
    )
  }
}
