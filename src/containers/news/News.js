import News from "../../components/news/News";
import {connect} from "react-redux";
import {chooseCategory, chooseCountry, getNews, setPageSize} from "../../actions/news/newsAction";

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList,
        country: state.news.country,
        pageSize: state.news.pageSize,
        category: state.news.category
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews: () => dispatch(getNews()),
        onChooseCountry: (country) => {
            dispatch(chooseCountry(country));
            dispatch(getNews())
        },
        onChooseCategory: (category) => {
            dispatch(chooseCategory(category));
            dispatch(getNews())
        },
        onChangePageSize: (pageSize) => {
            dispatch(setPageSize(pageSize));
            dispatch(getNews())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);