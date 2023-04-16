const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1:

const cat = {
    complain: function() {
        console.log("Meow!")
    }
};

cat.complain();


// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3:

heading.style.fontSize = "2em";


//Question 4:

heading.classList.add("subheading");


//Question 5:

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


//Question 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


//Question 7: 

function catsList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

catsList(cats);


//Question 8: 
//I struggled alot with this one, so I know that this is not right or finished.

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {

    let cat = "";


    for(let i = 0; i < cats.length; i++) {
        
        cat = cat + "<div>" + cats[i] + "</div>";

    }


    return cat;
}

const finalHtml = createCats(cats);
catContainer.innerHTML = finalHtml;