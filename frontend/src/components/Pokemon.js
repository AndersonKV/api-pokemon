import React from 'react';

const Posts = ({ posts, loading }) => {
    if(loading) {
        return <h2>loadding..</h2>;
    }

    return  (
        <div className="row pokemon-list-row">
            {posts.map((lista, n) => (
                <div className="col z-depth-1 grey lighten-4 move" key={n}>
                <div className=" ">
                    <div className="card-image">
                    <img alt="" className=" " src={lista.img}/>
                    </div>
                </div>

                <div className="card-content ">
                    <h6>Nº {lista.pokedex}</h6>
                    <h3>{lista.name}</h3>
                    <h6 className={"type color-type-" + lista.type_1}>{lista.type_1}</h6>
                </div>
                </div>
                ))}
                
            </div>
    );
};

export default Posts;

 