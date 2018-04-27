const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

let destination = document.getElementById("d1");

function createTextContainer(string) {
    const newElement = document.createElement("div");
    const textNode = document.createTextNode(string)
    newElement.appendChild(textNode);
    destination.appendChild(newElement);
}
function createNodeContainer(node) {
    const newElement = document.createElement("div");
    newElement.appendChild(node);
    newElement.className = "bar"
    destination.appendChild(newElement);
}

function kata1() {
    let text = ""
    for(let i = 0; i <= 20; i++) {
      text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("1. Display the numbers from 1 to 20.")
createNodeContainer(kata1())

function kata2() {
    let text = ""
    for(let i = 2; i <= 20; i += 2) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("2. Display the even numbers from 1 to 20.")
createNodeContainer(kata2())

function kata3() {
    let text = ""
    for(let i = 1; i <= 20; i += 2) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("3. Display the odd numbers from 1 to 20.")
createNodeContainer(kata3())

function kata4() {
    let text = ""
    for(let i = 5; i <= 100; i += 5) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("4. Display the multiples of 5 up to 100.")
createNodeContainer(kata4())

function kata5() {
    let text = ""
    for(let i = 1, x = 1; i < 100; x++) {
        i = x * x;
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("5. Display the square numbers up to 100.")
createNodeContainer(kata5())

function kata6() {
    let text = ""
    for(let i = 20; i >= 1; i--) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("6. Display the numbers counting backwards from 20 to 1.")
createNodeContainer(kata6())

function kata7() {
    let text = ""
    for(let i = 20; i >= 2; i -= 2) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("7. Display the even numbers counting backwards from 20.")
createNodeContainer(kata7())

function kata8() {
    let text = ""
    for(let i = 19; i >= 1; i -= 2) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("8. Display the odd numbers from 20 to 1, counting backwards.")
createNodeContainer(kata8())

function kata9() {
    let text = ""
    for(let i = 100; i >= 5; i -= 5) {
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("9. Display the multiples of 5, counting down from 100.")
createNodeContainer(kata9())

function kata10() {
    let text = ""
    for(let i = 100, x = 10; i > 1; x--) {
        i = x * x;
        text += String(i) + " "
    }
    return document.createTextNode(text)
}

createTextContainer("10. Display the square numbers, counting down from 100.")
createNodeContainer(kata10())

function kata11() {
    return document.createTextNode(sampleArray)
}

createTextContainer("11. Display the 20 elements of sampleArray.")
createNodeContainer(kata11())

function kata12() {
    let text = ""
    for(let i = 0; i < sampleArray.length; i++) {
        if((sampleArray[i] % 2) == 0) {
            let evenNumber = sampleArray[i]
            text += evenNumber + " "
        }
    }
    return document.createTextNode(text)
}

createTextContainer("12. Display all the even numbers contained in sampleArray.")
createNodeContainer(kata12())

function kata13() {
    let text = ""
    for(let i = 0; i < sampleArray.length; i++) {
        if((sampleArray[i] % 2) == 1) {
            text += sampleArray[i] + " "
        }
    }
    return document.createTextNode(text)
}

createTextContainer("13. Display all the odd numbers contained in sampleArray.")
createNodeContainer(kata13())

function kata14() {
    let text = ""
    for(let i = 0, x = 0; i < sampleArray.length; i++) {
        x = sampleArray[i] * sampleArray[i];
        text += x + " "
    }
    return document.createTextNode(text)
}

createTextContainer("14. Display the square of each element in sampleArray.")
createNodeContainer(kata14())

function kata15() {
    let text = ""
    for(let i = 0, sum = 0; i <= 20; i++) {
        sum = sum + i;
        text = sum
    }
    return document.createTextNode(text)
}

createTextContainer("15. Display the sum of all the numbers from 1 to 20.")
createNodeContainer(kata15())

function kata16() {
    let text = ""
    for(let i = 0, sum = 0; i < sampleArray.length; i++) {
        sum = sum + sampleArray[i]
        text = sum
    }
    return document.createTextNode(text)
}

createTextContainer("16. Display the sum of all the elements in sampleArray.")
createNodeContainer(kata16())

function kata17() {
    let min = Math.min(...sampleArray)
    return document.createTextNode(min)
}

createTextContainer("17. Display the smallest element in sampleArray.")
createNodeContainer(kata17())

function kata18() {
    let max = Math.max(...sampleArray)
    return document.createTextNode(max)
}

createTextContainer("18. Display the largest element in sampleArray.")
createNodeContainer(kata18())

function kata19() {
    for(let i = 1; i <= 20; i++) {
        newElement.appendChild(node)
        newElement.className("graybox")
    }
    return document.createTextNode(node)
}

createTextContainer("19. Display 20 solid gray rectangles, each 20px high and 100px wide.")
createNodeContainer(kata19())