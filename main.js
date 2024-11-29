document.getElementById('calculate-btn').addEventListener('click', () => {
    // Get values from input fields
    const finalExam = parseFloat(document.getElementById('final').value);
    const percFinal = parseFloat(document.getElementById('percFinal').value);
    const firstMidterm = parseFloat(document.getElementById('1st').value);
    const perc1 = parseFloat(document.getElementById('perc1').value);
    const secondMidterm = parseFloat(document.getElementById('2nd').value);
    const perc2 = parseFloat(document.getElementById('perc2').value);
    const homework = parseFloat(document.getElementById('home').value);
    const percHome = parseFloat(document.getElementById('percHome').value);

    // Calculate the final grade
    const finalGrade = (finalExam * (percFinal / 100)) + (firstMidterm * (perc1 / 100)) +
    (secondMidterm * (perc2 / 100)) + (homework * (percHome / 100));

    // Determine letter grade
    let letterGrade = '';
    if (finalGrade >= 90) {
        letterGrade = 'A';
    } else if (finalGrade >= 80) {
        letterGrade = 'B';
    } else if (finalGrade >= 70) {
        letterGrade = 'C';
    } else if (finalGrade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    // Display the result
    document.getElementById('result').innerHTML = `<h3> Final Grade: ${finalGrade.toFixed(2)}</h3> <br> <h4> Letter Grade: ${letterGrade}</h4>`;
});
