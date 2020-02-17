import React, {Component} from "react";

/**
 1.Когда мы передаём <Clock /> в ReactDOM.render(), React вызывает конструктор компонента.
 Clock должен отображать текущее время, поэтому мы задаём начальное состояние this.state
 объектом с текущим временем.

 2.React вызывает метод render() компонента Clock. Таким образом React узнаёт, что отобразить
 на экране. Далее, React обновляет DOM так, чтобы он соответствовал выводу рендера Clock.

 3.Как только вывод рендера Clock вставлен в DOM, React вызывает метод жизненного цикла
 componentDidMount(). Внутри него компонент Clock указывает браузеру установить таймер,
 который будет вызывать tick() раз в секунду.

 4.Таймер вызывает tick() ежесекундно. Внутри tick() мы просим React обновить состояние
 компонента, вызывая setState() с текущим временем. React реагирует на изменение состояния
 и снова запускает render(). На этот раз this.state.date в методе render() содержит новое
 значение, поэтому React заменит DOM. Таким образом компонент Clock каждую секунду обновляет UI.

 5.Если компонент Clock когда-либо удалится из DOM, React вызовет метод жизненного цикла
 componentWillUnmount() и сбросит таймер
 */

export default class Clock extends Component {

    constructor(props) {
        console.log("--- constructor() ---");

        super(props);
        this.state = {date: new Date()}
    }

    // запускается после того, как компонент отрендерился в DOM
    componentDidMount() {
        console.log("--- componentDidMount() ---");

        this.timerID = setInterval(
            () =>
                this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log("--- componentWillUnmount() ---");
        clearInterval(this.timerID);
    }

    // запускается таймером каждую секунду и вызывает this.setState(),
    // метод setState() планирует обновление внутреннего состояния компонента
    tick() {
        console.log("--- tick() ---");

        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log("--- render() ---");

        return (
            <div>
                <h1>Hello, World!!!</h1>
                <h2>Now: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
