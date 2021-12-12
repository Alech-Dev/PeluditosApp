const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://Yesid_Web:BrockWebMinTIC@clustergeneral.d3wc8.mongodb.net/PeluditosNotesDB?retryWrites=true&w=majority")
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
    