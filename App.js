const heading1 =React.createElement("h1",{},'I am H1 Tag')


const parent=React.createElement("div",{id:'Parent'},
                    React.createElement("div",{id:'child'},[heading1,
                        React.createElement("h1",{},'I am H1 Tag')  ]
                    )
                   
);
console.log(parent);
console.dir(parent);



const heading=React.createElement("h1",{id:"heading"},"Hello World React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);