// SLAPTAŽODIS:

// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."

// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:

// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".

// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

            let pswrd = "verysecu#asdasasdasdsadsadasdsaddrd";

            if (pswrd.length < 16) {
                console.log("Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo");
            }
            else if (pswrd.length > 15 && pswrd.includes("#")) {
                if (pswrd.length > 20) {
                    console.log("Slaptažodis tinkamas");
                }
                else if (pswrd.length < 20) {
                    console.log("„Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo");
                }
            }
            else if (!pswrd.includes("#")){
                console.log("Slaptažodis privalo turėti grotažymes");
            }

// AMŽIUS

// Pagal amžiu surašyti į kurią klasė eina mokinys:

// 1. Iki 6 metų į mokyklą neina.

// 2. 7-10 metų eina į pradinę klasę.

// 3. 11-14 metų eina į pagrindinę.

// 4. 15-18 metų eina į gimnaziją.

// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.

// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."

// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."

// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."

// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."

// 9. Panaudoti prompt funkciją amžiui įvesti.

            let age = prompt("Please enter your age:");

            if (age <= 6) {
                console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.")
            }
            else if (age >=7 && age <=10) {
                console.log("eina į pradinę klasę")
                if (age === 10) {
                    console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.")
                }
            }
            else if (age >=11 && age <=14) {
                console.log("eina į pradinę klasę")
                if (age === 14) {
                    console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.")
                }
            }
            else if (age >=15 && age <=18) {
                console.log("eina į pradinę klasę")
                if (age === 18) {
                    console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.")
                }
            }
            else if (age >= 19) {
                console.log("mokyklą baigė.")
            }
            else if (age === 0) {
                console.log("įvestas amžius yra per mažas.")
            }
            else if (age > 120) {
                console.log("įvestas amžius yra per didelis.")
            }
            else if (typeof age !== "number") {
                console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius.")
            }

// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu

// PIRMAS LYGIS:

// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:

// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.

// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.

// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.

// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// ANTRAS LYGIS:

// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:

// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// TREČIAS LYGIS:

// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.

// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.

// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.



// siek tiek confused del lygiu requirements

                let currentLevel = 1;

                function askQuestion() {
                  if (currentLevel === 1) {
                    const answer = prompt("Level 1: What is 2 + 2?");
                    if (answer === "4") {
                      alert("Correct! ");
                      const answer2 = prompt("Level 1: What is 4 + 2?");
                      if (answer2 === "6") {
                        alert("Correct! You can move on to the next level.");
                        currentLevel++;
                        askQuestion();
                      } else {
                        alert("Incorrect! Try again.");
                        askQuestion();
                      }
                    } else {
                      alert("Incorrect! Try again.");
                      askQuestion();
                    }
                  } else if (currentLevel === 2) {
                    const answer = prompt(
                      "Level 2: What is the capital of France?\na) Paris\nb) London"
                    );
                    if (answer.toLowerCase() === "a") {
                      alert("Correct! ");
                      const answer2 = prompt("Level 2: What is 8 + 2?");
                      if (answer2 === "10") {
                        alert("Correct! You can move on to the next level.");
                        currentLevel++;
                        askQuestion();
                      } else {
                        alert("Incorrect! Try again.");
                        askQuestion();
                      }
                    } else {
                      alert("Incorrect! Try again.");
                      askQuestion();
                    }
                  } else if (currentLevel === 3) {
                    const answer = prompt(
                      "Level 3: Which planet is known as the Red Planet?\na) Earth\nb) Mars"
                    );
                    if (answer.toLowerCase() === "b") {
                      alert("Correct! Congratulations, you've completed all the levels!");
                    } else {
                      alert("Incorrect! Try again.");
                      askQuestion();
                    }
                  }
                }
                askQuestion();

// PASISVEIKINIMAS:

// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".

// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".

// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:

// 3.1. 5-12 val. „Good Morning"

// 3.2. 13-18 val. „Good Afternoon"

// 3.3. 19-4 val. „Good Evening"

// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"


let connected = false;
const now = new Date();
const hours = now.getHours();
const user = prompt("What's your name?");
let birthday = prompt("When is your birthday (yyyy-mm-dd)?");

if (user) {
    connected = true;
} else {
    connected = false;
}

if (connected === true) {
    if (hours >= 5 && hours <= 12) {
        console.log(`Good Morning, ${user}. The time now is: ${hours}`);
    } else if (hours >= 13 && hours <= 18) {
        console.log(`Good Afternoon, ${user}. The time now is: ${hours}`);
    } else if (hours >= 19 || hours <= 4) {
        console.log(`Good Evening, ${user}. The time now is: ${hours}`);
    }

    const today = new Date();
    const userBirthday = new Date(birthday);
    
    if (
        today.getDate() === userBirthday.getDate() &&
        today.getMonth() === userBirthday.getMonth()
    ) {
        console.log(`Happy Birthday, ${user}! 🎉`);
    }
} else {
    if (hours >= 5 && hours <= 12) {
        console.log(`Good Morning. The time now is: ${hours}`);
    } else if (hours >= 13 && hours <= 18) {
        console.log(`Good Afternoon. The time now is: ${hours}`);
    } else if (hours >= 19 || hours <= 4) {
        console.log(`Good Evening. The time now is: ${hours}`);
    }
}