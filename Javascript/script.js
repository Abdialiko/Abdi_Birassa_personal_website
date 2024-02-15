// Add any JavaScript for interactive elements here
// Example: A simple script to toggle a mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    // Implementation for mobile menu toggle
});
function showDetails(projectId) {
    var details = {
        'erp': 'Enterprise resource planning System (ERP) [18/03/2018 – 22/12/2018] ...',
        'crime': 'Crime management system [13/02/2019 – 18/06/2019] ...',
        'union': 'Union/Cooperative information management system [05/08/2019 – 27/03/2020] ...',
        'survey': 'Survey management system (web based and mobile application) [22/04/2020 – 06/11/2020] ...',
        'guardium': 'IBM Security Guardium Data Protection for Databases [22/12/2020 – 18/03/2021] ...',
        'waf': 'WAF F5 (Web Application Firewall) [08/04/2021 – 21/06/2021] ...',
        'book': 'Book and Inventory management System ...',
        'gotrip': `"GoTrip" is an innovative ride-hailing platform developed by Africa Technology PLC in Ethiopia. It is designed to
        provide users with a convenient and reliable transportation solution, tailored to meet the unique needs of the
        Ethiopian market. This project involves the development of both a web and mobile application to cater to the
        diverse needs of users across various devices. The platform aims to streamline the process of booking rides,
        ensuring efficiency, safety, and user satisfaction. ...`,
    };

    document.getElementById('project-details').innerHTML = details[projectId] || 'No details available';
}
function showcer(cerid) {
    var details = {
        'cer1': './Image/cer1.jpg',
        'cer2': './Image/cer2.jpg',
        'cer3': './Image/cer3.jpg',
    };
    var imageUrl = details[cerid] || 'No details available';
    document.getElementById('cer').innerHTML = `<img src="${imageUrl}" class="cer" alt="Certificate Image">`;

}