import React, {PureComponent} from "react";

export default class Article extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    // эквивалентнo записи c constructor(props)
    // state = {
    //     isOpen: false
    // };

    // если наследуемся от PureComponent, то данный метод не нужно реализовывать,
    // так как у него метод shouldComponentUpdate() уже реализован

    // // чтобы внутренние статьи не менялись, только первая и последняя
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen;
    // }

    componentWillMount() {
        console.log("---", 'mounting');
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("--- will receive props ---");
    //
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) {
    //         this.setState({
    //             isOpen: nextProps.defaultOpen
    //         });
    //     }
    // }

    componentWillUpdate() {
        console.log("--- will update ---");
    }

    render() {

        const {article, isOpen, onButtonClick} = this.props;
        const style = {width: '75%'};
        const body = isOpen && <section className="card-text">{article.text}</section>;

        return (
            <div className="card mx-auto" /* style={{width: '50%'}} OR */ style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">
                        creation date: {new Date(article.date).toDateString()}
                    </h6>
                </div>
            </div>
        );
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
}