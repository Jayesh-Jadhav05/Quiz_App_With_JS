const Allquestion = [

    {
        Question: "Q1 : Which Of The Following OS Belongs To IBM?",
        a: "UNIX",
        b: "DOS",
        c: "OS/2",
        d: "Fedora",
        ans: "ans3"
    },

    {
        Question: "Q2 : Which Of The Following Files Stores Windows Setting?",
        a: "SYSTEM>INI",
        b: "TEMP>INI",
        c: "WIN>INI",
        d: "SYSINFO>INI",
        ans: "ans3"
    },

    {
        Question: "Q3 : A Megabyte,also Known as a MB Contain ?",
        a: "512 Bytes",
        b: "1024 Bytes",
        c: "1000 Kilobytes",
        d: "1024 kilobytes",
        ans: "ans2"
    },

    {
        Question: "Q4 : What is The Role Of Computer Ports?",
        a: "Communication with computer peripherals",
        b: "Linking To Computer's CPU",
        c: "Downloading Files",
        d: "None Of The above",
        ans: "ans1"
    },

    {
        Question: "Q5 : The Collection Of 8 bits Makes?",
        a: "Nibble",
        b: "Byte",
        c: "Word",
        d: "None Of The above",
        ans: "ans2"
    },

    {
        Question: "Q6 :What is Meant by GUI in Computer ?",
        a: "Graphical Unique Interface",
        b: "Graph User Interface",
        c: "Graphical Universal Interface",
        d: "Graphical User Interface",
        ans: "ans4"
    },

    {
        Question: "Q7 : Which Of The Following Options Represents a Non-Valatile Memory?",
        a: "DRAM",
        b: "SRAM",
        c: "ROM",
        d: "None Of The above",
        ans: "ans3"
    },

    {
        Question: "Q8 : Pascaline is Known as?",
        a: "Adding Machine",
        b: "Multiplication Machine",
        c: "Division Machine",
        d: "Difference Engine",
        ans: "ans1"
    },

    {
        Question: "Q9 : How Many Generations are Computers Currently Classified into?",
        a: "6",
        b: "5",
        c: "4",
        d: "2",
        ans: "ans2"
    },

    {
        Question: "Q10 : What Does SSD Stand For?",
        a: "Solid State Device",
        b: "Solid Storage Device",
        c: "Serial State Data",
        d: "Solid State Drive",
        ans: "ans4"
    }
    
];



const Question = document.querySelector('.Question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const button = document.querySelector('.btn');
const answer = document.querySelectorAll('.option');
const showscore = document.querySelector('#scorepart');


let conter = 0;
let score = 0;

const adddata = () =>{

    const question = Allquestion[conter];
    Question.innerHTML = question.Question;
    option1.innerHTML = question.a;
    option2.innerHTML = question.b;
    option3.innerHTML = question.c;
    option4.innerHTML = question.d;
    
}
adddata();

const getans = () =>{
    let ans;
 answer.forEach((curre) =>{
      if(curre.checked){
         ans = curre.id;
      }
 });
 return ans;
};

const selectnone = () => {
    answers.forEach((element) => {
        element.checked = false;
    });
}


button.addEventListener('click',() =>{
   
    const myans = getans();
     
     if(means){
    if(myans == Allquestion[conter].ans){
        score++;
    };

    conter++;
    if(conter < Allquestion.length){
            adddata();
        }
        else{
            showscore.innerHTML = `
               <h3> Your Score is ${score}/${Allquestion.length}

               <button class = "btn" onclick="location.reload()">Play Again</button>
            ` ;
            showscore.classList.remove('scores');
        }
}

    });


