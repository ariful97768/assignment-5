function pageButtonColor(pageName) {
    if (pageName == 'donation') {
        document.getElementById('donation').classList.add('bg-lime-300');
        document.getElementById('history').classList.remove('bg-lime-300');
        document.getElementById('donateSection').classList.remove('hidden');
        document.getElementById('historySection').classList.add('hidden');
    } else if (pageName == 'history') {
        document.getElementById('donation').classList.remove('bg-lime-300');
        document.getElementById('history').classList.add('bg-lime-300');
        document.getElementById('donateSection').classList.add('hidden');
        document.getElementById('historySection').classList.remove('hidden');
    }
}



function donateNow(name) {
    let availableBalance = parseInt(document.getElementById('availableBalance').innerText);
    const noakhali = document.getElementById('noakhaliBalance');
    const feni = document.getElementById('feniBalance');
    const qouta = document.getElementById('qoutaBalance');
    let donationDate = new Date();
    let currentDonationBalance, inputAmount;
    if (name == 'noakhali') {
        currentDonationBalance = parseInt(document.getElementById('noakhaliBalance').innerText);
        inputAmount = parseInt(document.getElementById('noakhaliInput').value);
    } else if (name == 'feni') {
        currentDonationBalance = parseInt(document.getElementById('feniBalance').innerText);
        inputAmount = parseInt(document.getElementById('feniInput').value);
    } else if (name == 'qouta') {
        currentDonationBalance = parseInt(document.getElementById('qoutaBalance').innerText);
        inputAmount = parseInt(document.getElementById('qoutaInput').value);
    }


    if (availableBalance <= 0 || availableBalance < inputAmount) {
        alert('Top up your balance first');
        return;
    } else if (inputAmount <= 0 || isNaN(inputAmount)) {
        alert("Invalid donation amount")
        return;
    } else {
        let newBalance = currentDonationBalance + inputAmount;
        let newAvailableBalance = availableBalance - inputAmount;
        document.getElementById('availableBalance').innerText = newAvailableBalance;

        if (name == 'noakhali') {
            document.getElementById('noakhaliBalance').innerText = newBalance;
            document.getElementById('historySection').innerHTML += `
            <div class="border-2 px-8 py-8 rounded-xl mb-6">
                <h3 class="text-xl font-bold"> ${inputAmount} Taka is Donated for Flood Relief at Noakhali, Bangladesh</h3>
                <p class="font-light opacity-70 mt-4">Date : ${donationDate} </p>
            </div>
            `
            alert('Thank you for donating');
            return;
        } else if (name == 'feni') {
            document.getElementById('feniBalance').innerText = newBalance;

            document.getElementById('historySection').innerHTML += `
            <div class="border-2 px-8 py-8 rounded-xl mb-6">
                <h3 class="text-xl font-bold"> ${inputAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
                <p class="font-light opacity-70 mt-4">Date : ${donationDate} </p>
            </div>
            `
            alert('Thank you for donating');
            return;
        } else if (name == 'qouta') {
            document.getElementById('qoutaBalance').innerText = newBalance;

            document.getElementById('historySection').innerHTML += `
            <div class="border-2 px-8 py-8 rounded-xl mb-6">
                <h3 class="text-xl font-bold"> ${inputAmount} Taka Aid for Injured in the Quota Movement</h3>
                <p class="font-light opacity-70 mt-4">Date : ${donationDate} </p>
            </div>
            `
            alert('Thank you for donating');
            return;
        }
    }

}