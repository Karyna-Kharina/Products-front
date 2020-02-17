import React, {PureComponent} from "react";
import Index from "../ArticleList";
import articles from "../../fixtures";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default class App extends PureComponent {

    state = {
        reverted: false
    };

    // копия массива
    // articles = articles.slice();

    render() {

        console.log("--- render Index ---");
        console.log("state: ", this.state, articles.map(article => article.id));

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 title">
                        App name
                        <button className="btn btn-light" onClick={this.revert}>
                            Revert
                        </button>
                    </h1>
                </div>
                <Index articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        console.log("--- revert ---");

        this.setState({
            reverted: !this.state.reverted
        })
    }
}