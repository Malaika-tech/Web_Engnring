// // Function to delete a row from an HTML table based on its ID
function deleteFunc(taskId) {
    // Find the row element in the document using its ID
    const row = document.getElementById(taskId);
    
    // Check if the row exists to avoid errors
    if (row) {
        // Remove the row from the table
        row.remove();
    } else {
        console.log("Row with ID " + taskId + " not found.");
    }
}
