const nodes = [
    process.env.REACT_APP_NODE_1,
    process.env.REACT_APP_NODE_2,
    process.env.REACT_APP_NODE_3
];

// fetch a random node to connect to
const getNodeUrl = () => {
    return nodes[Math.floor(Math.random() * nodes.length)];
};

export default getNodeUrl;