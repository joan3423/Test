import React from 'react';
import './materialcomponents/styles.css';
import './materialcomponents/material.js';
import './resources/muscript.js';
import logo from './images/user.jpg';



const data = [

]

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      form: {
        id: '',
        nombre: '',
        pais: '',
        checked: ''
      }
    }
  }
  

  componentDidMount() {
    fetch("http://localhost:3000/empresa").then((resp) => {
      return resp.json();
    }).then((data) => {
      console.log(data);
      this.setState({ data: data })
    });
  }

  handlesubmit() {
    fetch("http://localhost:3000/empresa", {
      method: "post",
      headers: {
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify(this.state.form)
    });
  }

  handlechange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  insert = () => {
    var nuevovalor = { ...this.state.form }
    nuevovalor.id = this.state.data.length + 1;
    nuevovalor.checked = '';
    var lista = this.state.data;
    lista.push(nuevovalor);
    this.setState({ data: lista });



  }

  changestate = (dato) => {
    var contador = 0;
    var lista = this.state.data;
    lista.map((registro) => {
      if (dato == registro.id && lista[contador].checked == "") {
        lista[contador].checked = "checked"
      } else if (dato == registro.id && lista[contador].checked == "checked") {
        lista[contador].checked = ""
      }
      contador++;
    });
    this.setState({ data: lista });
  }
  render() {
    return (
      <>
        <div>
          <table class="mdl-data-table data-table--selectable mdl-js-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th className="short-td">Estado</th>
                <th class="mdl-data-table__cell--non-numeric">Empresa</th>
                <th>Pais</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <React.Fragment>
                  <tr>
                    <td className="short-td">
                      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for={elemento.id}>
                        <input type="checkbox" id={elemento.id} onClick={() => this.changestate(elemento.id)} class="mdl-checkbox__input" checked={elemento.checked} />
                      </label>
                    </td>
                    <td class="mdl-data-table__cell--non-numeric">{elemento.nombre}</td>
                    <td>{elemento.pais}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="align-center">
            <button id="show-dialog" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Registra tu empresa</button>
            <dialog className="mdl-dialog">
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="sample1" value={this.state.data.length + 1} />
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" name="nombre" type="text" id="sample1" onChange={this.handlechange} />
                  <label className="mdl-textfield__label" htmlFor="sample1">Nombre de la empresa</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" name="pais" type="text" id="sample1" onChange={this.handlechange} />
                  <label className="mdl-textfield__label" htmlFor="sample1">País</label>
                </div>
                <div className="mdl-dialog__actions">
                  <button type="button" className="mdl-button close" onClick={()=> {this.insert(); this.handlesubmit();}}>Enviar</button>
                  <button type="button" className="mdl-button close">Cancelar</button>
                </div>
              </form>
            </dialog>
          </div>

        </div>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="A front-end template that helps you build fast, modern mobile web apps." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <title>Material Design Lite</title>
        {/* Add to homescreen for Chrome on Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" sizes="192x192" href="images/android-desktop.png" />
        {/* Add to homescreen for Safari on iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Material Design Lite" />
        <link rel="apple-touch-icon-precomposed" href="images/ios-desktop.png" />
        {/* Tile icon for Win8 (144x144 + tile color) */}
        <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png" />
        <meta name="msapplication-TileColor" content="#3372DF" />
        <link rel="shortcut icon" href="images/favicon.png" />
        {/* SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones */}
        {/*
    <link rel="canonical" href="http://www.example.com/">
    */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-light_blue.min.css" />
        <style dangerouslySetInnerHTML={{ __html: "\n    #view-source {\n      position: fixed;\n      display: block;\n      right: 0;\n      bottom: 0;\n      margin-right: 40px;\n      margin-bottom: 40px;\n      z-index: 900;\n    }\n    " }} />
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Home</span>
              <div className="mdl-layout-spacer" />
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                  <input className="mdl-textfield__input" type="text" id="search" />
                  <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                </div>
              </div>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                <i className="material-icons">more_vert</i>
              </button>
              <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                <li className="mdl-menu__item">About</li>
                <li className="mdl-menu__item">Contact</li>
                <li className="mdl-menu__item">Legal information</li>
              </ul>
            </div>
          </header>
          <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
            <header className="demo-drawer-header">
              <img src={logo} className="demo-avatar" />
              <div className="demo-avatar-dropdown">
                <span>hello@example.com</span>
                <div className="mdl-layout-spacer" />
                <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                  <i className="material-icons" role="presentation">arrow_drop_down</i>
                  <span className="visuallyhidden">Accounts</span>
                </button>
                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
                  <li className="mdl-menu__item">hello@example.com</li>
                  <li className="mdl-menu__item">info@example.com</li>
                  <li className="mdl-menu__item"><i className="material-icons">add</i>Add another account...</li>
                </ul>
              </div>
            </header>
            <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
              <a className="mdl-navigation__link" href><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Empresas</a>
              <div className="mdl-layout-spacer" />
            </nav>
          </div>
          <main className="mdl-layout__content mdl-color--grey-100">
            <Table />
          </main>
        </div>

      </>

    </div>
  );
}



export default App;


