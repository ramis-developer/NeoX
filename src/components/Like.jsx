import React, { useState } from 'react'

function Like() {
    const [like, setLike] = useState(0);
    return(
        <div>
            <button onClick={() => setLike (like + 1)}>❤️ Лайк</button>
            <p>Лайков: {like}</p>
        </div>
    )
}

export default Like