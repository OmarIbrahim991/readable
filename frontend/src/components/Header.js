import React from 'react'


const Header = ({ categories, category, selectCategory, order, selectOrder }) => {
    return (
        <header className="header">
            <div>
                <label htmlFor="category-form">Show: </label>
                <select id="category-form" value={category} onChange={e => selectCategory(e.target.value)}>
                    <option value="all">ALL</option>
                    {
                        categories.map(({ name }) => (
                            <option key={name} value={name}>{name.toUpperCase()}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="sort-form">Order by: </label>
                <select id="sort-form" value={order} onChange={e => selectOrder(e.target.value)}>
                    <option value="timestamp">DATETIME</option>
                    <option value="voteScore">UPVOTES</option>
                    <option value="commentCount">COMMENTS</option>
                </select>
            </div>

        </header>
    )
}

export default Header
