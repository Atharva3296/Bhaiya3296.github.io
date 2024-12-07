document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ageCalculatorForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const birthdate = new Date(document.getElementById('birthdate').value);
        const today = new Date();

        if (isNaN(birthdate.getTime())) {
            resultDiv.textContent = 'Please enter a valid date.';
            return;
        }

        if (birthdate > today) {
            resultDiv.textContent = 'Birthdate cannot be in the future.';
            return;
        }

        const ageData = calculateAge(birthdate, today);
        resultDiv.textContent = `Your age is ${ageData.years} years, ${ageData.months} months, and ${ageData.days} days.`;
    });

    function calculateAge(birthdate, today) {
        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();
        
        if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
            years--;
            months += 12;
        }

        if (days < 0) {
            months--;
            days += 31;

        }
        
        return {
            years,
            months,
            days
        };
    }
});

