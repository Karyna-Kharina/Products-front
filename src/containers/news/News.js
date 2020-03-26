import News from "../../components/news/News";
import {connect} from "react-redux";
import {chooseCountry, searchNews, setPageSize} from "../../actions/news/newsAction";

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList,
        country: state.news.country,
        pageSize: state.news.pageSize
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChooseCountry: (country) => dispatch(chooseCountry(country)),
        onChangePageSize: (pageSize) => dispatch(setPageSize(pageSize)),
        onClickApply: (news) => dispatch(searchNews(news))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);