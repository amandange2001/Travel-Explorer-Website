// JavaScript for the booking page (booking.html)
document.getElementById("destination").addEventListener("change", updateTotalCost);
document.getElementById("numOfTravelers").addEventListener("input", updateTotalCost);

function updateTotalCost() {
    const destinationSelect = document.getElementById("destination");
    const numOfTravelersInput = document.getElementById("numOfTravelers");
    const totalCostElement = document.getElementById("totalCost");

    const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
    const destinationCost = parseFloat(selectedOption.textContent.split('$')[1]);

    const numOfTravelers = parseInt(numOfTravelersInput.value);

    const totalCost = destinationCost * numOfTravelers;

    totalCostElement.textContent = "Total Cost: $" + totalCost.toFixed(2);
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Booking successful! Thank you for choosing Travel Explorer.");
});



document.getElementById("generateTicket").addEventListener("click", generateTicket);

function generateTicket() {
    const destinationSelect = document.getElementById("destination");
    const numOfTravelersInput = document.getElementById("numOfTravelers");

    const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
    const destinationName = selectedOption.textContent.split('-')[0].trim();
    const destinationCost = parseFloat(selectedOption.textContent.split('$')[1]);

    const numOfTravelers = parseInt(numOfTravelersInput.value);

    const totalCost = destinationCost * numOfTravelers;

    const ticketDetails = `
        <p><strong>Destination:</strong> ${destinationName}</p>
        <p><strong>Number of Travelers:</strong> ${numOfTravelers}</p>
        <p><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</p>
    `;

    const ticketContainer = document.getElementById("ticket-details");
    ticketContainer.innerHTML = ticketDetails;
}

