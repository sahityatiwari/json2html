// json2html.js

export default function json2html(data) {
    // Get all unique headers from data
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Start building the HTML table string
    let html = `<table data-user="sahityatiwari90035@gmail.com">`;
    
    // Create the table header
    html += `<thead><tr>`;
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr></thead>`;
    
    // Create the table body
    html += `<tbody>`;
    data.forEach(row => {
      html += `<tr>`;
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table>`;
    
    return html;
  }
  