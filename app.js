
// const fetchdata  = (async () => {
//     let url = (`https://json-server-1-mr23.onrender.com/users/`);
//     let option = {
//         method : 'GET',
//         headers : {
//             'Content-Type' : 'application/json'
//         }
//         // body : JSON.stringify();
//     }

//     let req = await fetch(url, option);
//     let res = await req.json();
//     console.log(res);
// })();




// const fetchdata  = (async () => {
//     let url=Number(4);

//     let url1 ;

//         url1 = (`https://json-server-1-mr23.onrender.com/products/${url}`);

//     let option = {
//         method : 'DELETE',
//         headers : {
//             'Content-Type' : 'application/json'
//         }
//         // body : JSON.stringify();
//     }

//     let req = await fetch(url1, option);
//     let res = await req.json();
//     console.log(res);
// })();


let datas = {};


    let url = (`https://json-server-1-mr23.onrender.com/users/`);
    let option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let req = await fetch(url, option);
    let res = await req.json();

        datas = {
            "id": res[2].id,
            "todolist": ['none']
        }



const fetchdata  = async (fdata) => {
    let url = (`https://json-server-1-mr23.onrender.com/products/`);
    let option = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(fdata)
    }

    let req = await fetch(url, option);
    let res = await req.json();
    console.log(res);
};

fetchdata(datas);