import React from 'react'


const Review = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return (
        <div className="review">
            <header>
                <a href={link.url}>{headline}</a>
                <span>{byline}</span>
            </header>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;