function renderTable(csvData, tableDiv) {
    // Split the CSV data into rows
    const rows = csvData.split('\n');

    // Create an HTML table
    const table = document.createElement('table');

    // Process each row
    rows.forEach((row, rowIndex) => {
        // Split the row into columns
        const columns = row.split(',');

        // Create a table row, except for the header row (index 0)
        const tr = document.createElement(rowIndex === 0 ? 'thead' : 'tr');

        columns_ = columns.slice();// made an copy
        columns.splice(1, 1)

        // Process each column
        columns.forEach((column, index) => {
            // index -= 1;
            const cellElement = rowIndex === 0 ? 'th' : 'td';
            const td = document.createElement(cellElement);

            if (index === 0 && rowIndex !== 0) {
                // For the second column (excluding header row), create a hyperlink
                const link = document.createElement('a');
                link.href = columns_[1];
                link.textContent = columns_[0];
                td.appendChild(link);
            } else {
                // For other columns and the header row, use plain text
                td.textContent = column;
            }

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });

    // Add the table to the HTML container
    document.getElementById(tableDiv).appendChild(table);
}