import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    let pageNumbers = [];

    const divison = Math.ceil(totalPosts.length / postsPerPage);

    for(let i = 1; i <= divison; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination center-align ">
            <li className="white"><a href="#!"><i className="material-icons">chevron_left</i></a></li>

            {pageNumbers.map(number => (
                <li key={number} className="black ul-li">
                    <a className={"white-text"} onClick={() => paginate(number)}>{number}</a>
                </li>
             ))}

            <li className="white"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>


    )
}

export default Pagination;