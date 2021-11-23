import { connect } from "react-redux";
import News from "../../components/news";
import { getNews } from "../../actions/newsSaga";
import { chooseCategory, chooseCountry, setPageSize } from "../../actions/news";

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList,
        country: state.news.country,
        pageSize: state.news.pageSize,
        category: state.news.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews: () => dispatch(getNews()),
        onChooseCountry: (country) => {
            dispatch(chooseCountry(country));
            dispatch(getNews());
        },
        onChooseCategory: (category) => {
            dispatch(chooseCategory(category));
            dispatch(getNews());
        },
        onChangePageSize: (pageSize) => {
            dispatch(setPageSize(pageSize));
            dispatch(getNews());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);