function getitems(){ 

    db.collection("users").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                make: doc.data().make,
                rating: doc.data().rating,
                price: doc.data().price
            })
            //console.log(`${doc.id} => ${doc.data()}`);
        });
        console.log(items);
    });    

}

getitems();