const {AddRequest} = require('./add/add_pb.js');
const {AddServiceClient} = require('./add/add_grpc_web_pb.js');

const addService = new AddServiceClient('http://localhost:8080');
const metadata = {};
let addRequest = new AddRequest();
addRequest.setA(25);
addRequest.setB(17);

addService.add(addRequest, metadata, (err, response) => {
    if (err) {
        document.body.append(`Failed to receive a sum ${err.message}`);
        return;
    }
    const sum = response.getSum();
    document.body.append(` The sum is: ${sum} |`);
});

// Same code on a button click
uiAdd.addEventListener('click', () => {
    let addRequest = new AddRequest();
    addRequest.setA(+input_a.value);
    addRequest.setB(+input_b.value);
    // addRequest.setA(25);
    // addRequest.setB(17);

    addService.add(addRequest, metadata, (err, response) => {
        if (err) {
            document.body.append(`Failed to receive a sum ${err.message}`);
            return;
        }
        const sum = response.getSum();
        document.body.append(` The sum is: ${sum} |`);
    });
});
