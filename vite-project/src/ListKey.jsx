// import React from 'react'

export default function ListKey() {
    const items = [
        { id: 1, name: 'sunil', age: 20 },
        { id: 2, name: 'prakash', age: 21 },
        { id: 3, name: 'shivu', age: 22 }
    ];

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
